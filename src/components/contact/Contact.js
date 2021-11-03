import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {BsArrowUpSquareFill} from 'react-icons/bs';
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjqadvy");
  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }
  return (
    <section id="contact">
      <div class="contact-container">
        <h1>CONTACT</h1>
        <p>Have a question or want to work together?</p>  
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        <a href="#home">
            <BsArrowUpSquareFill size={50} style={{zIndex:10, color: "white"}}/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
