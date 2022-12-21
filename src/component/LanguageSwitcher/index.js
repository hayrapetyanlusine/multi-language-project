import "./index.css"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import logo from "../../img/logo.png"

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { pathname, search, hash } = useLocation();

    const switcher = (language) => () => {
        i18n.changeLanguage(language);
        window.location.replace(
            `/${language}${pathname}${search}${hash}`
        )
    }

    return (
        <div id='languages'>
        <div id='languages-container'>
            <div>
                <img className='img' src={logo} alt='logo'></img>
            </div>
            <ul>
                <li onClick={switcher('am')}>AM</li>
                <li onClick={switcher('ru')}>RU</li>
                <li onClick={switcher('en')}>EN</li>
            </ul>
        </div>
        </div>
    )
}