function Contact(){
  return (
    <div>
      <div className="contact-banner">
         <p className="contact-title">WE  ARE  HERE  TO  HELP!</p>
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">Tell us about your next adventure!</p>
      </div>

       <div className="contact-content">
        <div className="contact-info">
          <h2><b>Get In Touch</b></h2>
          <p>📍 Pune, Maharashtra, India</p>
          <p>✉ hello@travelvista.example</p>
          <p>☎ +91 98765 43210</p>
          <p>Have a question about a destination? Send us a message and tell us where you want to go.</p>
        </div>
       
        <div className="contact-form">  
          <h2>Send us a Message</h2>
          <form>
            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="Your Name" />
            <label for="email">Your Email</label>
            <input type="email" id="email" placeholder="Your Email" />
            <label id="subject">Subject</label>
            <select className="subject-dropdown" id="subject" name="subject">
              <option>Trip Enquiry</option>
              <option>Booking Questions</option>
              <option>General Feedback</option>
              </select>
              <label for="message">Your Message</label>
            <textarea id="message" placeholder="Your Message" rows="7"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        </div>
    </div>
  )
}
export default Contact;