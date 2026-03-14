import { useState } from "react"
 
function About() {
 
  const [show, setShow] = useState(false)
 
  return (
    <div>
      <h2>Bianca Saguban</h2>
 
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Info" : "Show Info"}
      </button>
 
      {show && (
        <p>
          Hi! I am Bianca, so nice meeting you! bring ice cream if you wanna be my friend.
        </p>
      )}
 
    </div>
  )
}
 
export default About;