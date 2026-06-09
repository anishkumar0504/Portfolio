import React from 'react'
import { Hero } from './component/Hero'
import { Navbar } from './component/Navbar'
import { Projects } from './component/Projects'

const App = () => {
  return (
   <div className="relative isolate">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
       
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App