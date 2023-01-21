import React from 'react'

const Footer = () => {
  return (
      <footer className="w-full flex justify-center items-center
         bg-[#55efc4] sm:px-8 px-4 py-2.5 border-b border-b-[#e6ebf4]">
          <p className="text-white">
              Created with human intelligence by
              <a href='https://www.linkedin.com/in/arik-alexandrov/' target="_blank">arikxl {new Date().getFullYear}</a>
          </p>
      </footer>
  )
}

export default Footer