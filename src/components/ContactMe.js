import React from 'react'

const ContactMe = () => {
  let intro =  `Let's Chat.
                Tell me about your 
                Project`
  return (
    <div>
      <div>
        <h2>
          Let's Chat.<br/>
          Tell me about your <br/>
          Project
        </h2>
        <p>Let's create something together.</p>
        <p>
          Mail me at <br/>
          <span id='email'> shahzadfarrukh621@gmail.com </span>
        </p>
      </div>
      <div>
        <h1>
          Send us a message
        </h1>
        <form>
          <input/>
          <input/>
          <input/>
          <textarea>

          </textarea>
          <button>
            Send Message
          </button>
        </form>
      </div>
      
    </div>
    
  )
}

export default ContactMe