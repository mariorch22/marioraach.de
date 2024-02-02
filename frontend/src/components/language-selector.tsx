import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const languages = [
    {code: "de", lang: "Deutsch"},
    {code: "en", lang: "Englisch"}
]

const LanguageSelector = () => {

    const {i18n} = useTranslation()

    const changeLanguage = (lng:any) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div>
            {languages.map((lng) => {
                return <div className={lng.code === i18n.language ? "bg-green-400" : "bg-red-400"} ><button key={lng.code} onClick={() => changeLanguage(lng.code)} className="text-black mx-4" >{lng.lang}</button></div>
            })}
        </div>
    )
}

export default LanguageSelector