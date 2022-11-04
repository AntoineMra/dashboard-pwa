import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='bg-gray-700'>
                    <h1 className='text-white py-4 text-center text-3xl font-bold'>ImageQuizz</h1>
                </div>
            </header>
        )
    }
}
