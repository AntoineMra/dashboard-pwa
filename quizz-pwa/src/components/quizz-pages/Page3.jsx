import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Page3 = () => {
    const location = useLocation()

    return (
        <div>
            <h1 className=' py-16 text-center text-4xl font-bold'>Question 3 : Quel est la religion officiel de l'empire mongole ?</h1>

            <div className=''>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/ending'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Nestorianisme</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/ending'} state={{ score: location.state.score + 10 }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Tengrisme</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/ending'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Islam</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <Link to={'/ending'} state={{ score: location.state.score }}>
                        <button className='rounded bg-gray-500 px-4 text-lg'>Bouddhisme</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page3