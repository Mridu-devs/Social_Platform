import React, { Component } from "react";
import mypic from "./images/mypic.jpg";

class Timeline extends Component {
  state = {
    post: [],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.post.map((pst) => {
          return (
            <div key={pst.id} className="timeline-main-container">
              <div className="timeline-box">
                <div className="pic-name-container">
                  <img className="profilepic" src={pst.profilepic} alt="" />
                  <span className="name">{pst.name}</span>
                </div>

                <p className="post">{pst.post}</p>
                {/* <div className="postedby">Posted by {pst.name}</div> */}
                <div className="postedon">{pst.postedon}</div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
  componentDidMount = async () => {
    var promise = await fetch("http://localhost:5001/homepage", {
      method: "GET",
    });
    console.log(promise);
    var posts = await promise.json();
    console.log(posts);
    this.setState({ post: posts });
  };
}

export default Timeline;
