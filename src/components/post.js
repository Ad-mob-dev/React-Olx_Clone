import React from 'react';
import "../css/post.css";
import Postcat from "./postcat";

class Post extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show : true,
      
    }
  }
  

  render() {
    return (
     <>
      <strong className="text-center d-block"><h4 className="font-weight-bold">POST YOUR AD</h4></strong>
      <Postcat/>
     </>
      )
  }
}

export default Post;