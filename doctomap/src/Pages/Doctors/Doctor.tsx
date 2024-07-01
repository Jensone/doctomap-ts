import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Nav from '../../Components/Nav';
import UserIcon from '../../_partials/UserIcon';

export default function Doctor() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);
    const getOneDoctor = async () => {
        try {
            const response = await fetch(`http://localhost:3000/doctors/${id}`);
            const data: any = await response.json();
            setDoctor(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOneDoctor();
    }, [id]);

    return (
        <>
            <Nav />
            <section className="flex flex-col gap-4 p-4 max-w-lg m-auto bg-slate-50 rounded-lg justify-center items-center shadow-md">
                <UserIcon />
                <ul className="list-disc list-inside">
                    <li>{doctor.name ? doctor.name : 'N/A'}</li>
                    <li>{doctor.specialty ? doctor.specialty : 'N/A'}</li>
                    <li>{doctor.phone ? doctor.phone : 'N/A'}</li>
                    <li>{doctor.address ? doctor.address : 'N/A'}</li>
                    <li>{doctor.zip ? doctor.zip : 'N/A'}</li>
                    <li>{doctor.city ? doctor.city : 'N/A'}</li>
                    <li>{doctor.country ? doctor.country : 'N/A'}</li>
                    <li>
                        <a
                            href={doctor.url ? doctor.url : '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prendre rdv sur Doctolib
                        </a>
                    </li>
                </ul>
            </section>

            {/* TODO: fonctionnalités de modification et suppression */}
            <div className="w-full flex justify-center mt-10 gap-5">
                <NavLink to={'/doctor/' + id + '/edit'} className="border rounded-lg p-4 border-neutral-700 hover:bg-sky-300 text-center">
                    Modifier
                </NavLink>
                <NavLink to={'/doctor/' + id + '/delete'} className="border rounded-lg p-4 border-red-700 hover:bg-red-300 text-center">
                    Supprimer
                </NavLink>
            </div>
        </>
    );
}
