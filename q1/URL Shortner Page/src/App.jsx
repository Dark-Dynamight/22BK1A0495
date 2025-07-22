import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Url Shortner</h1>
        <form>
          <label htmlFor="urllink">Enter Url: </label>
          <input type="text" id="urllink" ></input>
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
    const data = await fetchData(url)
    console.log(data)
  })
}

export default App
export async function Myfun() {
  const data = await apicall()
  console.log(data)
  return data
}