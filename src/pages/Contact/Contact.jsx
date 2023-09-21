import React from 'react';
import './Contact.scss';
const Contact = () => {
    return (
        <div class="contact">
          <h1>LET'S HEAR FROM YOU</h1>
            <form>
              <div className="input-container">
                <input type="text"  placeholder="NAME"  required />
                <input type="email"  placeholder="EMAIL"  required />
              </div>
              <textarea placeholder="MESSAGE" required/>
              <button type="submit" >SEND</button>
          </form> 
     </div>
    );
}
export default Contact;