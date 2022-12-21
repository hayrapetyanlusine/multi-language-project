import "./convert.css"
import React, { useState, useRef } from 'react'
import { CloseSvg, DownSvg, SwapSvg } from './svg'
import { CurrencieComponent } from "./currencies/CurrencieComp";
import { Result } from "./result/Result";

export function Convert({ data, mainWords }) {
    const [amount, setAmount] = useState(1);
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);
    const [fromData, setFromData] = useState(data[0]);
    const [toData, setToData] = useState(data[1]);
    const fromRef = useRef("");
    const toRef = useRef("");
    const inputRef = useRef();

    const fromBtnClick = (currency) => {
        currency === undefined ? setFromData(fromData) : setFromData(currency);
        setOpenFrom(!openFrom);
        openFrom ? fromRef.current.classList.remove("open-from") : fromRef.current.classList.add("open-from");
    }

    const toBtnClick = (currency) => {
        currency === undefined ? setToData(toData) : setToData(currency);
        setOpenTo(!openTo);
        openTo ? toRef.current.classList.remove("open-to") : toRef.current.classList.add("open-to");
    }

    const swap = () => {
        setFromData(toData);
        setToData(fromData);
    }

    return (
        <div id="convert-container">
            <div className='currency-converter__inputs'>
                <label className='name'> {mainWords.amount}</label>
                <div className="inp-value" onClick={() => inputRef.current.focus()}>
                    <span> $ </span>
                    <input
                        type="text"
                        placeholder="20.00"
                        ref={inputRef}
                        value={amount}
                        onChange={(e) => { setAmount(e.target.value) }}
                    />
                </div>

                <label className='name'> {mainWords.from} </label>
                <div className="from">
                    <button className="btn" onClick={() => fromBtnClick()}>
                        {openFrom ? <CloseSvg /> : <DownSvg />}
                    </button>
                    <CurrencieComponent refs={fromRef} closeClick={fromBtnClick} currData={fromData} data={data} />
                </div>

                <div></div>
                <div>
                    <button className="swap-currencies" onClick={() => swap()}>
                        <SwapSvg />
                    </button>
                </div>

                <label className='name'> {mainWords.to} </label>
                <div className="to">
                    <button className="btn" onClick={() => toBtnClick()}>
                        {openTo ? <CloseSvg /> : <DownSvg />}
                    </button>
                    <CurrencieComponent data={data} refs={toRef} closeClick={toBtnClick} currData={toData} />
                </div>
            </div>

            <div className="result-container">
                <Result amount={amount} fromInputData={fromData} toInputData={toData} />
            </div>
        </div>
    )
}