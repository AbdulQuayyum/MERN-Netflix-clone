import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"

const home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured type="movie"/>
        </div>
  )
}

export default home

