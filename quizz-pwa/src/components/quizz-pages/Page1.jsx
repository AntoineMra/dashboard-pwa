import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Page1 = () => {
    const location = useLocation()

    return (
        <div>
            <h1 className='py-16 text-center text-4xl font-bold'>Question 1 : Quel est le nom de la première femme de Gengis Khan ?</h1>

            <div className=''>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p2'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Hoëlun</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p2'} state={{ score: location.state.score + 10 }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Börte</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p2'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>HeArhun</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p2'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Boudjara</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page1