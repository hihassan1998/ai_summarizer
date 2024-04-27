import React from 'react'
import logo from "../assets/logo.svg"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w- object-contain' />
        <button
          type="button"
          onClick={() => window.open('https://github.com/hihassan1998/ai_summarizer')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize articles with <br className='max-md:hidden' />
        <span className='blue_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open source article summarization tool that turns long articles into clear and concise summaries.

      </h2>
    </header>
  )
}

export default Hero