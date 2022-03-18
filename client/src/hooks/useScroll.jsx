import {useEffect, useState} from "react"

const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {scrollTop}
}

export default useScroll
