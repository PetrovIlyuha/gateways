import styles from "./CirclesLoader.module.css"

const CirclesLoader = () => {
  return (
    <div className="container flex flex-col justify-center items-center min-h-screen">
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default CirclesLoader
