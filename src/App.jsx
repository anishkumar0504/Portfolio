import React from 'react'
import { Hero } from './component/Hero'
import { Navbar } from './component/Navbar'
import { Projects } from './component/Projects'
import Card from './component/Card'
import Leads from './component/Leads'
import { Certificates } from './component/Certificates'
import { Contact } from './component/Contact'
import { useLenis } from './hooks/useLenis'

const App = () => {
   useLenis();
  return (
   <div className="relative isolate">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <div id="skills" className="relative overflow-hidden">
          <Leads />
        </div>
        <Certificates />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App