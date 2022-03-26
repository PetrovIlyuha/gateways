import React from "react"
import useScroll from "../../../../hooks/useScroll"

const ArtWork = () => {
  const {scrollTop} = useScroll()
  return (
    <div className="w-1/2" style={{marginTop: scrollTop}}>
      <div className="flex flex-col ml-12">
        <h2 className="text-2xl font-semibold">Explore All Events</h2>
        <img
          src="./assets/artwork_words.png"
          className="w-full rounded-2xl shadow-sm mt-3 opacity-60"
          alt=""
        />
      </div>
    </div>
  )
}

export default ArtWork
