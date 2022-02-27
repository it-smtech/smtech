import React from "react";
import { Button } from "react-bootstrap";

class End extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    this.props.updateActivePlayer();
  }

  render() {
    return (
      <div className="end-div">
        <Button onClick={this.handleClick}>End Turn</Button>
      </div>
    );
  }
}

export default End;
