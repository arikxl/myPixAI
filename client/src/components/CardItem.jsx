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
          <a description='download button' href={`https://www.facebook.com/sharer/sharer.php?u=${photo}`} target="_blank">
            <svg className="share-icon" xmlns="http://www.w3.org/2000/svg" style={{ width: 20 }} viewBox="0 0 512 512" aria-label="fb" role="img"><path d="m375.14,288l14.22,-92.66l-88.91,0l0,-60.13c0,-25.35 12.42,-50.06 52.24,-50.06l40.42,0l0,-78.89s-36.68,-6.26 -71.75,-6.26c-73.22,0 -121.08,44.38 -121.08,124.72l0,70.62l-81.39,0l0,92.66l81.39,0l0,224l100.17,0l0,-224l74.69,0z"></path></svg>
          </a>
          {/* <FacebookShareBtn url={ photo} /> */}
        </div>
      </div>
    </div>
  )
}

export default CardItem