import React from 'react'
import './Footer.css'
import { Tooltip } from 'react-tooltip'

export default function Footer() {
  return (
    <>
      <footer className='footer px-10 md:px-6'>
        <p className="border-b-2"></p>
        <div className='flex justify-center'>
          <p className='copyright text-sm text-center'>&copy; 2024 Elroy Lian</p>
          <Tooltip id="my-tooltip" />
					<a data-tooltip-id="my-tooltip" data-tooltip-content="Twitter" href="https://twitter.com/elroylian">
						<i className="fa-brands fa-x-twitter dark:text-white"></i>
					</a>
					<a data-tooltip-id="my-tooltip" data-tooltip-content="GitHub" href="https://github.com/elroylian">
						<i className="fa-brands fa-github dark:text-white"></i>
					</a>
					<button data-tooltip-id="my-tooltip" data-tooltip-content="Dark Mode" onClick={() => {
						document.querySelector('html')?.classList.toggle('dark')
					}}>
						<i className='fa-solid fa-moon dark:text-white'></i>
					</button>
        </div>
        
      </footer>
    </>
  )
}
