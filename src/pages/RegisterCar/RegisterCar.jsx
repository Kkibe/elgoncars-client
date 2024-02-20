import React from 'react'
import './RegisterCar.scss';

export default function RegisterCar() {
  return (
<div class="registerCar">
  <h1>REGISTER A CAR</h1>
  <form>
    <div className="input-container">
      <label htmlFor='name'>Your name:</label>
      <input type="text"  placeholder="NAME"  required id='name' name='name'/>
    </div>
    <div className="input-container">
      <label htmlFor='email'>Email:</label>
      <input type="email"  placeholder="EMAIL"  required id='email' name='email'/>
    </div>
    <div className="input-container">
      <label htmlFor='phone'>Your phone number:</label>
      <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
    </div>
    <div className="input-container">
      <label htmlFor='url'>Website url - optional</label>
      <input type="url" id='url' name='url'  placeholder="https://"  required={false} />
    </div>
    <div className="input-container">
      <input type="text"  placeholder="NAME OF THE CAR"  required />
      <input type="text"  placeholder="CAR SPECS(separate with comma(,))"  required />
    </div>
      
      
      

    <div className="input-container">
      <label ><h2>Is your car new or used?</h2></label>
      <label class="container">New
        <input type="radio" checked="checked" name="radio"/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Used
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
      </label>
    </div>
    <div className="input-container">
      <label><h2>Price Ksh:</h2></label>
      <input class="input bar-price" type="number" min={100000} defaultValue={100000}/>
    </div>
    <textarea placeholder="DESCRIPTION" required minLength={60}/>
    <button type="submit" >REGISTER</button>
</form> 
</div>
  )
}
