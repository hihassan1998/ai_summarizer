import React from 'react'
import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'

const Demo = () => {
  const [article, setArticle] = useState({
    url:'',
    summary:'',
  })
  const handleSubmit = async (e) =>{
    alert('Submitted')
  }
  


  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center item-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className='absolute left-0 my-2 ml-3 w-3'
          />

          <input
            type="url"
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setArticle({
              ...article, url: e.target.value
            })}
            required
            className='url_input'
          />

          <button
            type='submit w-full'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            ⏎
          </button>

        </form>
        {/* Browser URL history */}
      </div>

      {/* Display Results */}
    </section>
  )
}

export default Demo