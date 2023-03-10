import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-16 w-full flex justify-center items-center fixed bottom-0 left-0 right-0
         bg-[#55efc4] sm:px-8 px-4 py-2.5 border-b border-b-[#e6ebf4]">
            <p className="text-white">
                {`Created by  `}
            </p>
            <a href='https://www.linkedin.com/in/arik-alexandrov/' target="_blank"
            className=''>
                &nbsp;arikxl&nbsp;
            </a>
             <p className="text-white">
                { ` with human intelligence 2023`}
            </p>

        </footer>
    )
}

export default Footer