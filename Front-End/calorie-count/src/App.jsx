import { useState } from 'react'
import NavBar from './components/NavBar'
import NavDrawer from './components/NavDrawer'
import './App.css'

import AddFoodForm from './components/AddFoodForm'
function App() {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(isOpen => !isOpen);
  }

  return (
    <>
      <NavBar onMenuClick={toggleOpen}/>
      <NavDrawer isOpen={isOpen} toggleOpen={toggleOpen}/>
      <AddFoodForm/>
    </>
  )
}

export default App
