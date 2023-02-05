const Contact = () => {

    return ( 
    <main>
      <div className="contactWrapper">
        <h1>Contact</h1>
      </div>
      <section className="contact-details">
          <div className="cont-wrap">
            <div className="details-wrapper">
              <div className="office-details">
                <h3>Main Office</h3>
                <address>Mail: sales@pmgates.co.uk</address>
                <address>Address: </address>
                <address>Phone: 123-456-3451</address>
                <a target="_blank" href="https://www.google.com/maps/place/PMGATES/@50.947899,-2.6800939,17z/data=!3m1!4b1!4m5!3m4!1s0x48726b6ce88f83ef:0xdc95f60cb51ea032!8m2!3d50.947899!4d-2.6779052">
                  <button className="button">View On Map</button>
                </a>
              </div>
              <div className="office-details">
                <h3>Owner/Manager</h3>
                <address>Mail: </address>
                <address>Phone: 832-123-4321</address>
              </div>
            </div>
                    <div className="formContainer">
            < form href="mailto:topdrive940@gmail.com" method="get" encType="text/plain" className="formWrapper" >
              < div className="inputGroup" >
                < label htmlFor='name'>Name</label>
                < input type='text' id="name" name='name' className='inputField' />
              </div>
              < div className="inputGroup" >
                < label htmlFor='email'>Email</label>
                < input type='text' id="email" name='email' className='inputField' />
              </div>
              < div className="inputGroup" >
                < label htmlFor='message'>Message</label>
                < textarea cols="12" id="message" name='message' className='textarea' />
              </div>
              < button className="button" type='submit'>SEND</button>
            </form >
                    </div>
          </div>
      </section>
    </main>
     );
}
 
export default Contact;