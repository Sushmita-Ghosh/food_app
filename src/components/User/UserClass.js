import React from "react";

// This is the same User componnet but it is written using class based components

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  //   making an api call to the github user api
  async componentDidMount() {
    const response = await fetch(
      `https://api.github.com/users/${this.props.name}`
    );
    const json = await response.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: pihimej438@armablog.com</h4>
      </div>
    );
  }
}

export default UserClass;
