import React, { useEffect } from 'react'

const GamesByGenresId = ({gameList}) => {
  useEffect(()=>{
    console.log("pintu",gameList);
  },[])
  return (
    <div>
      <h2 className='font-bold text-[30px] dark:text-white mt-5 '>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
      {gameList.map((item) =>(
        <div className='bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'> 
          <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover gap-6'/>
          <h2 className='text-[20px] dark:text-white font-bold'>{item.name}<span className='p-1 text-green-700 rounded-sm ml-2 text-[10px] font-medium bg-green-100 '>{item.metacritic}</span></h2>
          <h2 className='text-gray-500 dark:text-gray-300'>⭐{item.rating}      🎬{item.reviews_count}     🔥{item.suggestions_count}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GamesByGenresId