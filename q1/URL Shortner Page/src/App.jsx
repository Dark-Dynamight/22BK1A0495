import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Url Shortner</h1>
        <form>
          <div>
            <label htmlFor="urllink">Enter Url<span>*</span>: </label>
            <input type="url" id="urllink" required></input>
          </div>
          <div>
            <label htmlFor="time">Select time: </label>
            <input type="time" id="time" />
          </div>
          <div>
            <label htmlFor="plink">Pefered link: </label>
            <input type="url" id="plink" />
          </div>
          <button type="submit" className="btn" f>Shorten</button>

        </form>
      </div>
    </>
  )
}

async function apicall() {
  let url = document.querySelector("input").value
  form.addListner("submit", async (event) => {
    event.preventDefault()
    let response = await fetch("https://api.shrtco.de/v2/shorten?url=" + url)
  })
}

export default App