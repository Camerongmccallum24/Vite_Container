import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">Cameron G McCallum</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Creative Developer & Designer</h1>
          <p>Building beautiful digital experiences</p>
        </section>

        <section id="work" className="work">
          <h2>Selected Work</h2>
          <div className="work-grid">
            {/* Work items will go here */}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <p>I'm a developer and designer focused on creating engaging digital experiences.</p>
        </section>

        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <p>Let's work together to bring your ideas to life.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Cameron McCallum. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App