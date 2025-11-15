'use client'

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button 
    type="button"
    id="explore-btn"
    className="mt-7 mx-auto"
    onClick={()=> console.log('click')}>
        <a href="#events">Explore Events</a>
        <Image src="/icons/arrow-down.svg" alt="arrow" width={20} height={20} />
    </button>
  )
}

export default ExploreBtn