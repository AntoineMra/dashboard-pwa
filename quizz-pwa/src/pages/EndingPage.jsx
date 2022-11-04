import React from 'react'
import { useLocation } from 'react-router-dom'

function EndingPage() {
    const location = useLocation()

    return (
        <div>You got {location.state.score} points</div>
    )
}

export default EndingPage