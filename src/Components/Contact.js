import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitContactForm } from '../contactActions'

const ContactPage = () => {
  const dispatch = useDispatch()
  const colorScheme = useSelector((state) => state.colorScheme)

  const {
    backgroundColor,
    primaryColor,
    secondaryColor,
    fontColor,
 } = colorScheme

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    }
    dispatch(submitContactForm(formData))
  
    e.target.reset()
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color:fontColor,
     }}
      className="back"
    >
      <header className="header2" style={{ backgroundColor: secondaryColor , color:primaryColor}}>
      Contact Us
      </header>
      <form onSubmit={handleSubmit} className="form">
        <div className='inform'>
          Name : <input type="text" id="name" name="name" />
        </div>
        <div className='inform'>
         Email : <input type="email" id="email" name="email" />
        </div>

        <div className='inform'>
          Message : <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className='but' style={{backgroundColor: primaryColor,color:fontColor}}>Submit</button>
      </form>
      </div>
  )
}

export default ContactPage
