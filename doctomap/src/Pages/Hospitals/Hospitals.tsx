import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Nav from "../../Components/Nav"

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([])
  
  const getHospitals = async () => {
    try {
      const response = await fetch("http://localhost:3000/hospitals")
      const data: any = await response.json()
      setHospitals(data)
    } catch (error) { 
      console.log(error)
    }
  }

  useEffect(() => {
    getHospitals()
  }, [])

  return (
    <>
      <Nav />
      <section className="flex flex-col gap-4 p-4 max-w-xl m-auto">
        <NavLink to={'/hospitals'} className="border border-gray-300 rounded-lg p-4 hover:border-sky-300 hover:bg-sky-300 text-center">
          Ajouter
        </NavLink>
        {
          hospitals.map((hospital) => (
            <NavLink 
              to={'/hospital/' + hospital.id} 
              key={hospital.id} 
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg bg-slate-50 flex gap-4 items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="rgb(125 211 252)" d="M9 13V8l3-2l3 2v5h-2v-3h-2v3Zm3 6.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/></svg>
                <div>
                  <p>{hospital.name}</p>
                  <p>{hospital.phone}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"/></svg>
            </NavLink>
          ))
        }
      </section>
    </>
  )
}