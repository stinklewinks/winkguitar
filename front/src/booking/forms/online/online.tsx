import React from 'react'
import './online.css'

function OnlineSignup() {
  return (
    <>
        <form className="pt:rel:10 pb:rel:10 w:60 m:auto">
            
            {/* Username */}
            <label htmlFor="username" className="lato">Username: <input className="lato" type="text" name="username" id="username-field" required/></label><br />

            {/* First Name */}
            <label htmlFor="first-name" className="lato">First Name: <input className="lato" type="text" name="fname" id="name-field" required/></label><br />
           
            {/* Email */}
            <label htmlFor="email" className="lato">Email: <input className="lato" type="email" name="email" id="email-field" required/></label><br />
           
            {/* Password */}
            <label htmlFor="password" className="lato">Password: <input className="lato" type="password" name="password" id="password-field" required/></label><br />
           
            {/* Instrument of Choice */}
            <fieldset>
                <select name="instrument" className="lato" title="Instrument">
                    <option value="acoustic">Acoustic</option>
                    <option value="electric">Electric</option>
                </select>
            </fieldset>
           
            {/* Years of Experience */}
            <fieldset title="Years of Experience"><label htmlFor="experience" className="cg">Years of Experience</label><br />
                <select name="experience" className="lato" title="Experience">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5-plus">5+</option>
                </select>
            </fieldset>
            
            {/* Zoom or Discord */}
            <fieldset>
                <label htmlFor="username" className="lato"><input type="checkbox" name="discord" id="discord" /> Discord</label><br />
                <label htmlFor="username" className="lato"> <input type="checkbox" name="zoom" id="zoom" /> Zoom</label><br />
            </fieldset>
            
            {/* Any Additional Notes */}
            <label htmlFor="additional-notes"><textarea placeholder="Additional notes" /></label><br />
            <button title="submit" className="lato">SIGNUP</button>
        </form>
    </>
  )
}

// Create graphQL schema for this

// This also should inform some user classes

export default OnlineSignup