import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DoctorDelete() {
    const { id } = useParams();
    const Navigate = useNavigate();

    const deleteDoctor = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/doctors/${id}`,
                {
                    method: 'DELETE',
                }
            );
            console.log(response);
            Navigate('/doctors');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center h-screen p-4 max-w-xl m-auto">
                <h1 className="text-3xl text-center">
                    Vous êtes sur le point de supprimer le médecin {id}
                </h1>
                <p className="text-center">Confirmer la suppression ?</p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={deleteDoctor}
                        className="border rounded-lg p-4 border-red-700 hover:bg-red-300 text-center"
                    >
                        Supprimer
                    </button>
                    <button className="border border-gray-300 rounded-lg p-4 hover:border-sky-300 hover:bg-sky-300 text-center">
                        Annuler
                    </button>
                </div>
            </div>
        </>
    );
}
