import "./CurrencieComp.css"
import React from 'react'

export function CurrencieComponent({ data, refs }) {
    return (
        <div>
            <span id="curr-inp">
                <img className="flag-img" alt="flag" src={data[0].flag} />
                <input
                    className="currency-input"
                    type="text"
                    placeholder="Type to search..."
                />
            </span>

            <div className="currency-container" ref={refs}>
                <ul className="currency">
                    {
                        data.map(currency => {
                            return (
                                <li key={currency.id} >
                                    <img className="flag-img" alt='img' src={currency.flag} />
                                    <p>{currency.abbreviation} - {currency.currency}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}