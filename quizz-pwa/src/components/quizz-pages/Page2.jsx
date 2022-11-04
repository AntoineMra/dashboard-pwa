import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Page2 = () => {

    const location = useLocation()

    return (
        <div>
            <h1 className=' py-16 text-center text-4xl font-bold'>Question 2 : Quel est la première conquête extérieur de l'empire Mongole ?</h1>

            <div className=''>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p3'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Empire khwarezmien</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p3'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Coumans</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p3'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Abbasside</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/p3'} state={{ score: location.state.score + 10 }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Royaume de Jia</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page2