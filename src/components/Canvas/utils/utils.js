//base config

function utils() {
  var GRAVITY = .1;
  var SIZE = 200;
  var PIECE_SIZE = 10;
  var MAX_VY = 4;
  var MAX_FALL_V = 10;
  var DEATH_COLOR = 170;
  var MIN_LIFETIME = 2000;

  var cnv = null;
  var ctx = null;
  var lastTime = 0;

  var alonelySquare = {
    usedCount: 0,
    idleTime: 1000,
    idleCounter: 0,
    offset: 0,

    pieces: [],

    init: function () {
      this.offset = Math.floor(cnv.width * .5 - SIZE * .5);
      var amount = Math.pow(SIZE / PIECE_SIZE, 2);
      for (var i = 0; i < amount; i++) {
        this.pieces.push({
          x: (PIECE_SIZE * i) % SIZE + this.offset,
          y: PIECE_SIZE * Math.floor(i / (SIZE / PIECE_SIZE)) + this.offset,
          vy: Math.random() * MAX_VY,
          lifeTime: 0,
          falling: false,
          used: false
        });
      }
    },

    revive: function (i) {
      this.pieces[i].lifeTime = 0;
      this.pieces[i].y = 0 - PIECE_SIZE;
    },

    update: function (dt) {
      if (this.usedCount == this.pieces.length) {
        this.reset();
        this.idleCounter += dt;
      }

      if (this.idleCounter >= this.idleTime) {
        this.idleCounter = 0;
      }

      if (this.idleCounter) {
        this.idleCounter += dt;
        return;
      }

      for (var i = this.pieces.length - 1; i >= 0; i--) {
        if (this.pieces[i].falling) {
          if (this.pieces[i].y >= cnv.height) {
            this.revive(i);
          }

          this.pieces[i].vy = Math.min(this.pieces[i].vy + GRAVITY, MAX_FALL_V);
          this.pieces[i].y += this.pieces[i].vy;

          var finiteY = PIECE_SIZE * Math.floor(i / (SIZE / PIECE_SIZE)) + this.offset;
          if (this.pieces[i].y <= finiteY && this.pieces[i].y + PIECE_SIZE > finiteY) {
            this.pieces[i].y = finiteY;
            this.pieces[i].falling = false;
            this.pieces[i].used = true;
            this.usedCount++
          }
        } else if (!this.pieces[i].used) {
          var ages = Math.round(Math.random());
          if (ages) {
            var row = i / (SIZE / PIECE_SIZE);
            this.pieces[i].lifeTime += (dt + Math.pow(row, 1.5));

            if (this.pieces[i].lifeTime >= MIN_LIFETIME) {
              this.pieces[i].falling = true;
            }
          }
        }
      }
    },

    reset: function () {
      for (var i = 0; i < this.pieces.length; i++) {
        this.pieces[i].used = false;
        this.pieces[i].vy = Math.random() * MAX_VY;
        this.usedCount = 0;
      }
    },

    render: function () {
      for (var i = this.pieces.length - 1; i >= 0; i--) {
        var color = Math.floor((this.pieces[i].lifeTime / MIN_LIFETIME) * DEATH_COLOR);
        ctx.fillStyle = 'rgba(' + color + ',0,0,1)';
        ctx.fillRect(Math.floor(this.pieces[i].x), Math.floor(this.pieces[i].y), PIECE_SIZE, PIECE_SIZE);
      }
    }
  };

  function update(dt) {
    alonelySquare.update(dt);
  };

  function render() {
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    alonelySquare.render();
  };

  function alive() {
    window.requestAnimationFrame(alive);
    var now = new Date();
    var dt = Math.min(now - lastTime, 100);
    update(dt);
    render();
    lastTime = now;
  };

  window.onload = function () {
    cnv = document.querySelector('canvas');
    ctx = cnv.getContext('2d');
    lastTime = new Date();
    alonelySquare.init();

    alive();
  };
}

