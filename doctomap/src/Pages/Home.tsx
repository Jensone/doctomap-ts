import Nav from '../Components/Nav'
import '../assets/style.css'
import Doctors from '../Components/Doctors'
import Hospitals from '../Components/Hospitals'


function Home() {

  return (
    <>
      <Nav />
      <div className="flex gap-5 justify-center">
        <Doctors />
        <Hospitals />
      </div>
    </>
  )
}

export default Home
