import React, { Component } from 'react';
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const gitalk = new Gitalk({
  clientID: 'd06130056fa27590d47e',
  clientSecret: '848534155ec3e9f5775ca97f537b3ecfa6dc5dcd',
  repo: 'Blog-Comment',
  owner: 'PiccoloYu',
  admin: ['PiccoloYu'],
  id: window.location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: true, // Facebook-like distraction free mode
  createIssueManually: false
})



class Comment extends Component {

  componentDidMount() {
    gitalk.render('gitalk-container')
  }

  render() {
    return (
      <div className="Comment" id="gitalk-container"></div>
    );
  }
}

export default Comment;