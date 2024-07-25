import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import EntryTable from './components/EntryTable'
import NavBar from './components/NavBar'
import NavDrawer from './components/NavDrawer'
import './App.css'

function App() {
  const [isOpen, setOpen] = useState(true);

  function toggleOpen() {
    setOpen(isOpen => !isOpen);
  }

  return (
    <>
      <NavBar onMenuClick={toggleOpen}/>
      <NavDrawer isOpen={isOpen} toggleOpen={toggleOpen}/>
    </>
  )
}

export default App
