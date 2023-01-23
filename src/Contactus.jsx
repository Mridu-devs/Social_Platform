import React, { Component } from "react";
import mypic from "./images/mypic.jpg";
import ProjectDB from './ProjectDB.json'


class Contactus extends Component {
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
                  {/* <img className="profilepic" src={mypic} alt="" /> */}
                  <img className="profilepic" src={pst.profilepic} alt="" />
                  <div>{pst.profilepic}{console.log(pst.profilepic)}</div>
                  <span className="name">{pst.name}{pst.id}</span>
                </div>

                <p className="post">{pst.address}</p>
                {/* <div className="postedby">Posted by {pst.name}</div> */}
                <div className="postedon">{pst.emailid}</div>
              </div>

            </div>
          );
        })}
      </React.Fragment>
    );
  }

  componentDidMount = async () => {
    var promise = await fetch("http://localhost:5001/users/", {
      method: "GET",
    });
    console.log(promise);
    var posts = await promise.json();
    console.log(posts);
    this.setState({ post: posts });
  };
}

export default Contactus;
