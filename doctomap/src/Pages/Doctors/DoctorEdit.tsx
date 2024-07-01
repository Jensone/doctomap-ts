import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DoctorEdit() {
  const [doctor, setDoctor] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
      fetch(`http://localhost:3000/doctors/${id}`)
        .then((response) => response.json())
        .then((data) => setDoctor(data));
  }, [id]);
  
  const editDoctor = async () => {
      try {
          const response = await fetch(`http://localhost:3000/doctors/${id}`, {
              method: 'PUT',
              body: JSON.stringify(doctor),
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          const data: any = await response.json();
          setDoctor(data);
      } catch (error) {
          console.log(error);
      }
  };
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen p-4 max-w-xl m-auto">
        <h1 className="text-3xl text-center">
          Vous êtes sur le point de modifier le médecin {id}
        </h1>
        <form action="" className="flex flex-col gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              value={doctor.name}
              onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="specialty">Spécialité</label>
            <input
              type="text"
              name="specialty"
              id="specialty"
              value={doctor.specialty}
              onChange={(e) =>
                setDoctor({ ...doctor, specialty: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={doctor.phone}
              onChange={(e) => setDoctor({ ...doctor, phone: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={doctor.email}
              onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              name="address"
              id="address"
              value={doctor.address}
              onChange={(e) =>
                setDoctor({ ...doctor, address: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="zip">Code postal</label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={doctor.zip}
              onChange={(e) => setDoctor({ ...doctor, zip: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              name="city"
              id="city"
              value={doctor.city}
              onChange={(e) => setDoctor({ ...doctor, city: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="country">Pays</label>
            <input
              type="text"
              name="country"
              id="country"
              value={doctor.country}
              onChange={(e) =>
                setDoctor({ ...doctor, country: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              name="url"
              id="url"
              value={doctor.url}
              onChange={(e) => setDoctor({ ...doctor, url: e.target.value })}
            />
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={editDoctor}
              className="border rounded-lg p-4 border-red-700 hover:bg-red-300 text-center"
            >
              Modifier
            </button>
            <button className="border border-gray-300 rounded-lg p-4 hover:border-sky-300 hover:bg-sky-300 text-center">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </>
  );
}