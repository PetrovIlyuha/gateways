import {motion} from "framer-motion"

const VideoLoaderOnLoad = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        src={`/assets/intro.mp4`}
        className="w-screen min-h-screen object-cover relative"
        autoPlay
        loop
        muted
      />
      <motion.h2
        initial={{scale: 0, opacity: 0.2}}
        animate={{scale: 1.5, opacity: 1, transition: {duration: 1}}}
        className="absolute top-2/4 left-1/5 origin-center text-white text-5xl animate-pulse"
      >
        Welcome to GateWays!
      </motion.h2>
    </div>
  )
}

export default VideoLoaderOnLoad
