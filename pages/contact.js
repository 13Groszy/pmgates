import { useState } from 'react'



const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
  let data = {
      name,
      email,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  

    return ( 
    <main>
      <section className="contact-intro">
        <div className="contact-intro-img">
          <div className="contact-intro-img-overlay">
            <h2 className="contact-heading-small">Contact</h2>
          </div>
        </div>
        <div className="contact-intro-text">
          <h2>Tell us about your project!</h2>
          <p>
            Contact us with your personal project! We are happy to help you with
            it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo voluptas, soluta itaque exercitationem nemo architecto provident illum natus dolores!
          </p>
        </div>
      </section>
      <section className="contact-details">
        <h2>Contact Details</h2>
        <div className="details-wrapper">
          <div className="office-details">
            <h3>Main Office</h3>
            <address>Mail: sales@pmgates.co.uk</address>
            <address>Address: </address>
            <address>Phone: 123-456-3451</address>

            <a className="view-portfolio" href="https://www.google.com/maps/place/PMGATES/@50.947899,-2.6800939,17z/data=!3m1!4b1!4m5!3m4!1s0x48726b6ce88f83ef:0xdc95f60cb51ea032!8m2!3d50.947899!4d-2.6779052">
              <p className="whiteText">View on Map</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#ffffff"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </a>
          </div>
          <div className="office-details">
            <h3>Owner/Manager</h3>
            <address>Mail: </address>
            <address>Phone: 832-123-4321</address>
          </div>
        </div>
      </section>
      <section>
        <div className="formContainer">
          < form className="formWrapper" >
            < formGroup className="inputGroup" >
              < label htmlFor='name'>Name</label>
              < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className='inputField' />  
            </formGroup>
            < formGroup className="inputGroup" >
              < label htmlFor='email'>Email</label>
              < input type='text' onChange={(e)=>{setEmail(e.target.value)}} name='email' className='inputField' />
            </formGroup>
            < formGroup className="inputGroup" >
              < label htmlFor='message'>Message</label>
              < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className='inputField' />
            </formGroup>
            < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
          </form >
        </div>
      </section>
    </main>
     );
}
 
export default Contact;