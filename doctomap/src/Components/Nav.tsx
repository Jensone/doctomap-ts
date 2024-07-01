import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full flex flex-col items-center justify-center gap-3 mb-5">
        <h1 className="text-3xl">doctomap</h1>
        <ul className="flex gap-3 items-center justify-center">
            <li className="">
                <NavLink to={'/'}>
                    accueil
                </NavLink>
            </li>
            <li className="">
                <NavLink to={'/doctors'}>
                    médecins
                </NavLink>
            </li>
            <li className="">
                <NavLink to={'/hospitals'}>
                    hôpitaux
                </NavLink>
            </li>
        </ul>
        <hr className="border-gray-300 w-1/6 hover:w-1/2 p-3 transition ease-in-out" />
    </nav>
)
}