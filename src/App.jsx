import React from 'react'
import Uploader from './components/Uploader'
import Image from './components/Image'
import "./styles/App.scss"

const App = () => {

  return (
    <main className="main">
      <div className="main__container">
          <Uploader />
          <Image />
      </div>
    </main>
  )
}

export default App
