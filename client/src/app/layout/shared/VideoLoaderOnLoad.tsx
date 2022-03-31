import {motion} from "framer-motion"
import {Dispatch, SetStateAction} from "react"

interface Props {
  setShowIntro: Dispatch<SetStateAction<Boolean>>
}

const VideoLoaderOnLoad: React.FC<Props> = ({setShowIntro}) => {
  return (
    <div className="w-full h-screen flex flex-col relative items-center justify-center">
      <video
        src={`/assets/intro.mp4`}
        className="w-screen min-h-screen object-cover relative"
        autoPlay
        loop
        muted
      />
      <motion.div
        initial={{scale: 0, opacity: 0.2}}
        animate={{scale: 1.5, opacity: 1, transition: {duration: 1}}}
        className="absolute flex flex-col items-center top-96 left-1/5 origin-center"
      >
        <h2 className="text-white text-5xl animate-pulse">Welcome to GateWays!</h2>
        <button
          onClick={() => setShowIntro(false)}
          className="px-12 py-4 mt-10 w-32 rounded-md 
                  bg-gradient-to-br from-blue-600 to-blue-800 
                  text-white shadow-md text-xl 
                  font-bold flex items-center justify-center"
        >
          Start
        </button>
      </motion.div>
    </div>
  )
}

export default VideoLoaderOnLoad
