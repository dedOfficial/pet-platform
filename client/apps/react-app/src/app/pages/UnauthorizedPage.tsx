import React from 'react';
import {useTranslation} from "react-i18next";

const UnauthorizedPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex h-full items-center justify-center">
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4 text-black">{t('authPageTitle')}</h2>
                <p className="text-gray-600">
                    {t('authPageDescription')}
                </p>
            </div>
        </div>
    );
};

export default UnauthorizedPage;
