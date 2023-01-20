import React from 'react'

import CardItem from './CardItem'

const CardList = ({ data, title }) => {
  return (
    <>
      {data?.length > 0 ? (
        <>
          {data.map((post) => (
            <CardItem key={post._id} {...post} />
          ))}
        </>
      ) : (
        <h2 className='mt-5 font-bold text-[#55efc4] text-xl uppercase'>{title}</h2>
      )}
    </>
  )
}

export default CardList