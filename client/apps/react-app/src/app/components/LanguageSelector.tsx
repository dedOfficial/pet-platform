import React from 'react';
import { Select } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';

import {LANGUAGES} from "../constants/languages.ts";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../redux/actions.ts";
import {IAppState} from "../types/IAppState.ts";
import {useTranslation} from "react-i18next";

const LanguageSelector: React.FC = () => {

    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state: IAppState) => state.language);

    const {i18n} = useTranslation();

    const handleChangeLanguage = (newLanguage: string) => {
        dispatch(setLanguage(newLanguage))
        i18n.changeLanguage(newLanguage).then(() => console.log("Language changes is successful"));
    };

    return (
        <Select
            suffixIcon={<TranslationOutlined />}
            defaultValue="en"
            value={selectedLanguage}
            className="w-24"
            onChange={handleChangeLanguage}
            options={LANGUAGES}
        />
    );
};

export default LanguageSelector;
