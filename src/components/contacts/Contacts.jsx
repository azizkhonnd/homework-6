import './Contacts.css';
import linkedin from './img/in.svg'
import tumblr from './img/tumblr.svg'
import dribble from './img/dribble.svg'
import behance from './img/behance.svg'


const Contacts = () => {

  return (
    <div className='container ContactsContainer'>
      <div className="socMedia">
        <h2 className='mediaTitle' >Social Media</h2>
        <div className="socIcons">
          <a className='socLink' href="#">
            <img width={40} height={40} src={linkedin} alt="linkedin" />
            Linkedin
          </a>
          <a className='socLink' href="#">
            <img width={40} height={40} src={tumblr} alt="tumblr" />
            Tumblr
          </a>
          <a className='socLink' href="#">
            <img width={40} height={40} src={dribble} alt="dribble" />
            Dribble
          </a>
          <a className='socLink' href="#">
            <img width={40} height={40} src={behance} alt="behance" />
            Behance
          </a>
        </div>
      </div>
      <div className='formContainer'>
        <h2 className='formTitle'>To Contact Me</h2>
        <form className='contactForm'>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <textarea className='textarea' placeholder='Message' rows='4' cols='50' />
          <button className='formBtn' type='submit'>Submit</button>
        </form>
        <div className='contactInfo'>
          <h3>Phone:</h3>
          <p>123-456-7890</p>
          <h3>Email:</h3>
          <p>info@example.com</p>
        </div>
      </div>




    </div>
  );
};

export default Contacts;
