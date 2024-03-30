import React from 'react';
import {useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { Result, Button, Flex, Typography } from 'antd';

const UnauthorizedPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackHome = () => navigate('/home')
    
    return (
        <Flex align='center' justify='center' className="h-full w-full">
            <Result
                status="403"
                title={<Typography.Title level={2}>{t('not_authorized_page_title')}</Typography.Title>}
                subTitle={t('not_authorized_page_description')}
                extra={<Button type="primary" onClick={handleBackHome}>{t('home')}</Button>}
            />
        </Flex>
    );
};

export default UnauthorizedPage;
