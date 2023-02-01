import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = ()=>{
    return(
        <>
            <h2 className="common-heading fontss">Contact Us :)</h2>

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>

<div className="container grid grid-two-column">
  
  <div className='my-5'>

  <h2 className='fontss'><LocationOnIcon/>  Our Office Address</h2>
  <p className='fontss'>Malad West, Mumbai, Maharashtra 400064</p>
  <h2 className='fontss'><EmailIcon/>  General Enquiries</h2>
  <p className='fontss'>contact@mysites.com</p>
  <h2 className='fontss'><CallIcon/>  Call Us</h2>
  <p className='fontss'>+91-8888888888</p>
  <h2 className='fontss'><AccessTimeIcon/>  Our Timing</h2>
  <p className='fontss'>Mon - Sun : 09:00 AM - 09:00 PM</p>
</div>
<div className="contact-form">
  <br/>
  <br/>
    <form
      action="https://formspree.io/f/xoqzvgjr"
      method="POST"
      className="contact-inputs">
      <h2 className="text-center">Contact Form</h2>
      <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete="off"
      />

      <input
        type="email"
        name="Email"
        placeholder="Email"
        autoComplete="off"
        required
      />

      <textarea
        name="Message"
        cols="15"
        rows="5"
        required
        autoComplete="off"
        placeholder="Enter you message"></textarea>

      <input className="submit border-0" type="submit" value="send" />
    </form>
  </div>
</div>
<br/>
<br/>
<br/>
        </>
    )
}

export default Contact;