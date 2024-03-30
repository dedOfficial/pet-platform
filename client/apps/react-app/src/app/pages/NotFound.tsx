import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { Result, Button, Flex, Typography } from 'antd';

const NotFound: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackHome = () => navigate('/home')
    
    return (
        <Flex align='center' justify='center' className="h-full w-full">
            <Result
                status="404"
                title={<Typography.Title level={2}>{t('not_found_page_title')}</Typography.Title>}
                subTitle={t('not_found_page_description')}
                extra={<Button type="primary" onClick={handleBackHome}>{t('home')}</Button>}
            />
        </Flex>
    );
};

export default NotFound;
