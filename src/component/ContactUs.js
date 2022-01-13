import React, { Component, useRef } from "react";
import Contact from "../assets/images/contact.png";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.forwardedRef = React.createRef();
    this.state = { name: "", email: "", subject: "", message: "" };
    this.submitHandler = this.submitHandler.bind(this);
  }
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  subjectChangeHandler = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };
  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  clearForm = () => {
    this.setState({ name: "", email: "", subject: "", message: "" });
  };
  submitHandler(event) {
    event.preventDefault();
    const vars = {
      name: this.state.name,
      subject: this.state.subject,
      email: this.state.email,
      message: this.state.message,
    };

    emailjs
      .send(
        "service_jfh1jw3",
        "SMTECH_Template",
        {
          name: this.state.name,
          subject: this.state.subject,
          email: this.state.email,
          message: this.state.message,
        },
        "user_4p2OcJhUBbNJltVJUkfsW"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Email Successfully Sent",
            icon: "success",
          });
          this.clearForm();
        },
        (error) => {
          Swal.fire({
            title: "Email Failed to Send",
            icon: "error",
          });
          console.log(error.text);
        }
      );
  }
  render() {
    const { name, email, subject, message } = this.state;

    return (
      <section ref={this.props.innerRef} className="background-primary row m-0">
        <div className="col-12">
          <h1>Contact us</h1>
        </div>

        <div className="col-md-6">
          <img src={Contact} alt="contact" />
        </div>

        <div className="col-md-6 background-black">
          <div className="contact-form">
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                value={name}
                required="required"
                placeholder=" Your Full Name"
                onChange={this.nameChangeHandler}
              />
              <input
                type="email"
                value={email}
                required="required"
                placeholder=" Your email"
                onChange={this.emailChangeHandler}
              />
              <input
                type="text"
                value={subject}
                required="required"
                placeholder="Object"
                onChange={this.subjectChangeHandler}
              />

              <textarea
                value={message}
                required="required"
                placeholder="Message..."
                onChange={this.messageChangeHandler}
              />
              <input type="submit" value="Send message" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ContactUs innerRef={ref} {...props} />
));
