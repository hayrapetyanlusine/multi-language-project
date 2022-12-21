import "./Result.css"
import React from 'react'

export function Result({ amount }) {
    return (
        <div className="result">
            <p className="converted-text">{`${amount} $ = `}</p>
            <p className="result-bigRate"> {amount} </p>
        </div>
    )
}