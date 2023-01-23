import React, { Component } from "react";
import mypic from "./images/mypic.jpg";
import withRouter from "./withRouter";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      post: "",
      userid: {},
    };
  }
  // state = {
  //   name: "",
  //   post: "",
  // };
  render() {
    console.log(this.state.userid)
    return (
      <React.Fragment>
        <div className="container-1">
          <div className="details-container">
            <div>
              <img
                className="home-profilepic"
                src={this.state.user.photo}
                alt=""
              />{" "}
            </div>
            <div>{this.state.user.name}</div>
            <div>{this.state.user.phonenumber}</div>
            <div>{this.state.user.emailid}</div>
            <div>{this.state.user.address}</div>
          </div>
          <textarea
            className="txtarea"
            placeholder="Let the world know your thoughts"
            cols="40"
            rows="7"
            maxLength="300"
            onChange={(event) => {
              this.setState({ post: event.target.value });
            }}
          />
          {/* <div>
          Posted By
          <input
            type="text"
            className="home-input"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
        </div> */}

          <div>
            {/* <Link to={`/timeline/${this.state.userid}`}> */}
            <Link to="/timeline">
              <button className="btn-post" onClick={this.onPost}>
                POST
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </React.Fragment>
    );
  }

  componentDidMount = async () => {
    let id = this.props.params.id;
    console.log(id);
    {
      this.setState({ userid: id });
    }
    var response = await fetch(`http://localhost:5001/users/${id}`, {
      method: "GET",
    });
    var userinfo = await response.json();
    console.log(userinfo);
    // console.log(userinfo[id]);
    this.setState({ user: userinfo });
  };

  onPost = async () => {
    const d = new Date();
    console.log(d);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[d.getMonth()];
    console.log(month);
    let date = d.getDate();
    console.log(date);
    let year = d.getFullYear();
    console.log(year);

    var posted = {
      name: this.state.user.name,
      post: this.state.post,
      postedon: `${month} ${date} ${year}`,
      profilepic: this.state.user.photo,
    };

    var response = await fetch("http://localhost:5001/homepage", {
      method: "POST",
      body: JSON.stringify(posted),
      headers: { "Content-type": "application/json" },
    });
    window.location.reload();
  };
}

export default withRouter(Homepage);
