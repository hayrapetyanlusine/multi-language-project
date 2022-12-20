import "./convert.css"
import React, { useState, useRef } from 'react'
import { CloseSvg, DownSvg, SwapSvg } from './svg'
import { CurrencieComponent } from "./currencies/CurrencieComp";

export function Convert({ data }) {
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);
    const fromRef = useRef("");
    const toRef = useRef("");

    return (
        <div id="convert-container">
            <div className='currency-converter__inputs'>
                <label className='name'> Amount </label>
                <div className="inp-value">
                    <span> $ </span>
                    <input type="text" placeholder="20.00" />
                </div>

                <label className='name'> From </label>
                <div className="from">
                    <button className="btn" onClick={() => {
                        setOpenFrom(!openFrom);
                        openFrom ? fromRef.current.classList.remove("open-from") : fromRef.current.classList.add("open-from");
                    }}>
                        {openFrom ? <CloseSvg /> : <DownSvg />}
                    </button>
                    <CurrencieComponent data={data} refs={fromRef} />
                </div>

                <div></div>
                <div>
                    <button className="swap-currencies">
                        <SwapSvg />
                    </button>
                </div>

                <label className='name'> To </label>
                <div className="to">
                    <button className="btn" onClick={() => {
                        setOpenTo(!openTo);
                        openTo ? toRef.current.classList.remove("open-to") : toRef.current.classList.add("open-to");
                    }}>
                        {openTo ? <CloseSvg /> : <DownSvg />}
                    </button>
                    <CurrencieComponent data={data} refs={toRef} />
                </div>
            </div>

        </div>
    )
}