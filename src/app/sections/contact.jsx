import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
          <h2>Section Contact</h2>
          <form className="flex bg-primary">
            <div className="content">
              <label htmlFor="fname">First name</label>
              <input type="text" id="fname" name="fname" />
              <label htmlFor="fmail">Mail</label>
              <input type="text" id="fmail" name="fmail" />
            </div>
            <div className="content">
              <label htmlFor="fmessage">Message</label>
              <input type="textarea" id="fmessage" name="fmail" />
            </div>
          </form>
      </div>
    </section>
  );
}
