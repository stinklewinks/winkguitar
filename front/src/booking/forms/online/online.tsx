import React from 'react'

function OnlineSignup() {
  return (
    <>
        <form>
            {/* Username */}
            <label htmlFor="username">Username: <input type="text" name="username" id="username-field" required/></label><br />
            {/* First Name */}
            <label htmlFor="first-name">First Name: <input type="text" name="fname" id="name-field" required/></label><br />
            {/* Email */}
            <label htmlFor="email">Email: <input type="email" name="email" id="email-field" required/></label><br />
            {/* Password */}
            <label htmlFor="password">Password: <input type="password" name="password" id="password-field" required/></label><br />
            {/* Instrument of Choice */}
            <fieldset>
                <select name="instrument" title="Instrument">
                    <option value="acoustic">Acoustic</option>
                    <option value="electric">Electric</option>
                </select>
            </fieldset>
            {/* Years of Experience */}
            <fieldset>
                <select name="experience" title="Experience">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5-plus">5+</option>
                </select>
            </fieldset>
            {/* Zoom or Discord */}
            <fieldset>
                <label htmlFor="username"><input type="checkbox" name="discord" id="discord" /> Discord</label><br />
                <label htmlFor="username"> <input type="checkbox" name="zoom" id="zoom" /> Zoom</label><br />
            </fieldset>
            {/* Any Additional Notes */}
            <label htmlFor="additional-notes"><textarea placeholder="Additional notes" /></label>
        </form>
    </>
  )
}

// Create graphQL schema for this

// This also should inform some user classes

export default OnlineSignup