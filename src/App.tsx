import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import "./App.css";
import { Report } from './components/Report/Report'

function App() {
  const [count, setCount] = useState(0)

  return <Report />
}

export default App
