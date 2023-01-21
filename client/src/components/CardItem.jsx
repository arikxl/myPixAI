import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';
import FacebookShareBtn from './FacebookShareBtn';


const CardItem = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img src={photo} alt={prompt}
        className='w-full h-auto object-cover rounded-xl' />
      <div className='group-hover:flex flex-col hidden max-h-[94.5%]
      absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md '>
        <p className='text-white text-md overflow-y-auto prompt'> {prompt}</p>
        <div className='flex items-center mt-5 justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <img className='avatar'
              src={`https://api.dicebear.com/5.x/croodles-neutral/svg?seed=${name}`}
              alt="avatar" />
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)}
            className='outline-none bg-transparent border-none'>
            <img src={download} alt='download button'
            className='w-10 h-10 object-contain invert '/>
          </button>
          {/* <FacebookShareBtn url={ photo} /> */}
        </div>
      </div>
    </div>
  )
}

export default CardItem