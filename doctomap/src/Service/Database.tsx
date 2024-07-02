/**
 * Ensemble de méthode (fonctions) pour
 * géré les appels aux APIs et effectuer
 * les opérations de CRUD complètes
 */

import { useState } from "react"

const doctorsUrl: string = "http://localhost:3000/doctors"
const hospitalsUrl: string = "http://localhost:3000/hospitals"

/**
 * Gestion des médecins
 */
interface Doctor {
    "id": number,
    "name": string,
    "specialty": string,
    "phone": string,
    "email": string,
    "address": string,
    "zip": string,
    "city": string,
    "url": string,
    "hospitalID": number
}

// Récupérer les médecins
export const getDoctors = async () => {
    const response = await fetch(doctorsUrl)
    const data = await response.json()
    console.log(data)
    return data
}

export const getOneDoctor = async (id: number) => {
    const response = await fetch(`${doctorsUrl}/${id}`)
    return response.json()
}

// Créer un médecin
export const createDoctor = async (data: Doctor) => {
    const response = await fetch(doctorsUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

// Éditer un médecin
export const editDoctor = async (id: number, data: Doctor) => {
    const response = await fetch(`${doctorsUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

// Supprimer un médecin
export const deleteDoctor = async (id: number) => {
    const response = await fetch(`${doctorsUrl}/${id}`, {
        method: 'DELETE'
    })
    return response.json()
}

// =============================================================================

/**
 * Gestion des hôpitaux
 */
interface Hospital {
    "id": number,
    "name": string,
    "specialty": string,
    "phone": string,
    "email": string,
    "address": string,
    "zip": string,
    "city": string,
    "url": string
}

// Récupérer les hôpitaux
export const getHospitals = async () => {
    const response = await fetch(hospitalsUrl)
    return response.json()
}

export const getOneHospital = async (id: number) => {
    const response = await fetch(`${hospitalsUrl}/${id}`)
    return response.json()
}

// Créer un hôpital
export const createHospital = async (data: Hospital) => {
    const response = await fetch(hospitalsUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

// Éditer un hôpital
export const editHospital = async (id: number, data: Hospital) => {
    const response = await fetch(`${hospitalsUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

// Supprimer un hôpital
export const deleteHospital = async (id: number) => {
    const response = await fetch(`${hospitalsUrl}/${id}`, {
        method: 'DELETE'
    })
    return response.json()
}