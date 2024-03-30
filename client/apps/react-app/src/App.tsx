import { Route, Routes, useNavigate, Navigate, useLocation, Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, MenuProps, ThemeConfig, Typography, theme, BreadcrumbProps } from 'antd';

import Home from "./app/pages/Home.tsx";
import LanguageSelector from "./app/components/LanguageSelector.tsx";
import Profile from "./app/pages/Profile.tsx";
import NotFound from "./app/pages/NotFound.tsx";
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MoonOutlined, SunOutlined, UserOutlined, createFromIconfontCN } from '@ant-design/icons';
import { useState } from 'react';
import PageContainer from './app/components/PageContainer.tsx';

type MenuItem = Required<MenuProps>['items'][number];

const IconFont = createFromIconfontCN({
    scriptUrl: ['//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', '//at.alicdn.com/t/c/font_4488484_sprgdmiqnx.js'],
});

const { Header, Footer, Sider, Content } = Layout;

const darkTheme: ThemeConfig = {
    token: {
        colorBgLayout: '#202124',
    },
    components: {
        Layout: {
            siderBg: '#1f1f1f',
            headerBg: '#171717',
            footerBg: '#171717'
        },
        Menu: {
            popupBg: '#1f1f1f',
            itemBg: '#1f1f1f',
            subMenuItemBg: '#1f1f1f',
            activeBarBorderWidth: 0
        }
    },
    algorithm: theme.darkAlgorithm
};

const lightTheme: ThemeConfig = {
    token: {
        colorBgLayout: '#ededed',
    },
    components: {
        Layout: {
            siderBg: '#ffffff',
            headerBg: '#f9f9f9',
            footerBg: '#f9f9f9'
        },
        Menu: {
            popupBg: '#ffffff',
            itemBg: '#ffffff',
            subMenuItemBg: '#ffffff',
            activeBarBorderWidth: 0
        }
    },
    algorithm: theme.defaultAlgorithm
};

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
};

const breadcrumbItemRender: BreadcrumbProps['itemRender'] = (currentRoute, _params, items, paths) => {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;
    const itemPath = `${paths.join("/")}`;
    
    return isLast ? (
        <span>{currentRoute.title}</span>
    ) : (
        <Link to={itemPath}>{currentRoute.title}</Link>
    );
}

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [themeType, setThemeType] = useState<'light' | 'dark'>('light');

    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems: MenuItem[] = [
        getItem(
            <Typography.Text className="text-current" onClick={() => navigate('/')}>
                {t('home')}
            </Typography.Text>,
            'home',
            <HomeOutlined />
        ),
        getItem(
            <Typography.Text className="text-current" onClick={() => navigate('/profile')}>
                {t('profile')}
            </Typography.Text>,
            'profile', 
            <UserOutlined />
        ),
        // getItem('User', 'sub1', <UserOutlined />, [
        //     getItem('Tom', '3'),
        //     getItem('Bill', '4'),
        //     getItem('Alex', '5'),
        // ]),
      ];
    
    const breadcrumbItems = location.pathname
        .split('/')
        .map(path => ({
            path,
            title: t(path) || <HomeOutlined />
        }));

    return (
        <ConfigProvider theme={themeType === 'light' ? lightTheme : darkTheme}> 
            <Layout className="min-h-screen">
                <Sider trigger={null} collapsed={collapsed} collapsible width="15%" className='shadow-sm'>
                    <div className="p-8 bg-indigo-600" />
                    <Menu mode="inline" items={menuItems} onClick={({ keyPath }) => navigate(`/${keyPath.join('/')}`)} />
                </Sider>
                <Layout>
                    <Header className="flex items-center gap-4 p-0 h-16 shadow-sm">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className="min-w-10 h-full rounded-none flex items-center justify-center"
                        />
                        <Breadcrumb className="flex items-center" items={breadcrumbItems} itemRender={breadcrumbItemRender} />
                        <div className="ml-auto flex items-center pr-5 gap-3">
                            <Button 
                                type="text" 
                                icon={themeType === 'light' ? <MoonOutlined /> : <SunOutlined /> } 
                                onClick={() => setThemeType((prev) => prev === 'light' ? 'dark' : 'light')}
                            />
                            <LanguageSelector />
                        </div>
                    </Header>
                    <Content>

                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>

                    </Content>
                    <Footer className="text-center px-12 py-5 shadow">
                        Pet Platform ©{new Date().getFullYear()}. {t('created_by')} Konstantin Karpov 
                        ({<IconFont type="icon-telegram" />}:<Typography.Link target='_blank' href="https://t.me/frontend_leader">@frontend_leader</Typography.Link> 
                        / 
                        <IconFont type="icon-github" />:<Typography.Link target="_blank" href="https://github.com/dedOfficial">dedOfficial</Typography.Link>)
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
            
    );
}

export default App;
