import React from 'react'
import { Header } from './components/Header'
import Hero from './components/Hero'
import './styles/App.scss'

function App() {

  return (
    <div className="app">
      <Header />
      <Hero 
        title="Aqua"
        details={[
          "As you probably already guessed this collection is",
          "dedicated to Arua color. Without a doubt. Aqua is",
          "one of the most important colors which is fresh"
        ]}
      />
   </div>
  )
}

export default App
