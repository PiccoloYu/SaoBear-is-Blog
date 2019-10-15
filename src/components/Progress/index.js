import React from "react";

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.myRef = React.createRef();
  }

  render() {
    const { scrollw } = this.props;
    return (
      <div className="scrollbar" ref={this.myRef}
        style={{
          width:scrollw
        }}
      ></div>
    )
  }
}

export default Progress