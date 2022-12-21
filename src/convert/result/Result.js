import "./Result.css"
import React from 'react'

export function Result({ amount, fromInputData = {}, toInputData = {} }) {
    const fromAbb = `${(fromInputData.abbreviation).toLowerCase()}`;
    const toAbb = `${(toInputData.abbreviation).toLowerCase()}`;

    const fromRate = fromInputData[Object.keys(fromInputData).filter(i => i.includes(toAbb))] || 1;
    const toRate = toInputData[Object.keys(toInputData).filter(i => i.includes(fromAbb))] || 1;

    return (
        <div className="result">
            <p className="converted-text">{`${amount} ${fromInputData.currency} = `}</p>
            <p className="result-bigRate">
                {amount * fromRate}
                <span> {toInputData.currency} </span>
            </p>

            <p className="p">{`1 ${toInputData.abbreviation} = ${toRate} ${fromInputData.abbreviation}`}</p>
            <p className="p">{`1 ${fromInputData.abbreviation} = ${fromRate} ${toInputData.abbreviation}`}</p>
        </div>
    )
}