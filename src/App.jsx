import React, { use, useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {

  cosnt [theme, setTheme] = useState('light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App