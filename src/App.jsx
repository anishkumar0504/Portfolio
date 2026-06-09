import React from 'react'
import { Hero } from './component/Hero'
import { Navbar } from './component/Navbar'
import { Projects } from './component/Projects'
import Card from './component/Card'
import Leads from './component/Leads'

const App = () => {
  return (
   <div className="relative isolate">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
       <Leads/>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App