import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h3>
            Farrukh.dev
        </h3>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;


// When the user at the top of the page then the navbar will appear in full length having the entire viewport width.
// When the user scrolls down or navigated to anywhere from the navbar then the navbar component will be a floating but fixed at a distance from the top of the viewport overlapping the main content with a slightly different background and border radius set to a vakue which will appear slightly rounded.
// When the user again scrolls to the top it will again aquire full viewport width.