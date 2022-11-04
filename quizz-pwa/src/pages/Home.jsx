import React, { Component } from 'react'
import Header from '../components/layout/Header'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className=''>
                    <h1 className=' py-16 text-center text-4xl font-bold'>Start the Quizz !</h1>

                    <div className=''>
                        <div className='flex items-center justify-center mb-4'>
                            <Link to={'/p1'} state={{ score: 0 }}>
                                <button className='rounded bg-green-500 px-4 text-lg'>Start the Quizz !</button>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Link to={'/rules'}>
                                <button className='rounded bg-red-500 px-4 text-lg'>Rules</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
