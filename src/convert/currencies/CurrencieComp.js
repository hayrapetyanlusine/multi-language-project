import "./CurrencieComp.css"
import React from 'react'

export function CurrencieComponent({ data, refs, closeClick, currData }) {
    const chooseCurrency = (currency) => () => {
        closeClick(currency);
    }

    return (
        <div>
            <span id="curr-inp">
                <img className="flag-img" alt="flag" src={require(`../../img/${currData.flag}`)} />
                <input
                    className="currency-input"
                    type="text"
                    placeholder="Type to search..."
                    value={`${currData.abbreviation} - ${currData.currency}`}
                    onChange={() => chooseCurrency()}
                />
            </span>

            <div className="currency-container" ref={refs} >
                <ul className="currency">
                    {
                        data.map(currency => {
                            return (
                                <li key={currency.id} onClick={chooseCurrency(currency)}>
                                    <img className="flag-img" alt='img' src={require(`../../img/${currency.flag}`)} />
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