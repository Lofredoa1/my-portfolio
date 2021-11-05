import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import "./contact.css";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjqadvy");
  if (state.succeeded) {
    return (
      <section id="contact">
        <div class="contact-submit">
          <p>Thanks for the message!</p>
          <div class="footer">
          <p>Anthony Lofredo ©2021</p>
        </div>
        </div>
      </section>
    )
  }
  return (
    <section id="contact">
      <div class="contact-container">
        <Slide right fraction={0.9}>
          <h1>CONTACT</h1>
        </Slide>
        <Slide left fraction={0.8}>
          <p>Have a question or want to work together?</p>
        </Slide>
        <Bounce bottom delay={1000}>
          <form onSubmit={handleSubmit}>
            <input id="name" type="text" name="name" placeholder="Name"/>
            <input id="email" type="email" name="email" placeholder="Email"/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message" placeholder="Your Message"/>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </Bounce>
        <a href="#home">
          <BsArrowUpSquareFill
            size={50}
            style={{ zIndex: 10, color: "white" }}
          />
        </a>
        <div class="footer">
          <p>Anthony Lofredo ©2021</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
