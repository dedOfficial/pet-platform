import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, MenuProps, ThemeConfig, Typography, theme } from 'antd';

import Home from "./app/pages/Home.tsx";
import LanguageSelector from "./app/components/LanguageSelector.tsx";
import Profile from "./app/pages/Profile.tsx";
import NotFound from "./app/pages/NotFound.tsx";
import { DesktopOutlined, FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    padding: '0px',
    height: '64px',
    display: 'flex',
    // position: 'sticky',
    // top: 0,
    // left: '15%',
    // zIndex: 1,
    // width: '85%',
};
  
const contentStyle: React.CSSProperties = {
    backgroundColor: '#dddddd',
};

const breadcrumbStyle: React.CSSProperties = {
    backgroundColor: '#eeeeee',
    padding: '16px'
};
  
const siderStyle: React.CSSProperties = {
    // overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0
};
  
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    // color: '#fff',
    // height: '55px',
    backgroundColor: '#fff',
    padding: '20px 50px'
};
  
const layoutStyle = {
    // borderRadius: 8,
    // overflow: 'hidden',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
    minHeight: '100vh'
};

const config: ThemeConfig = {
    token: {
        // colorBgBase: '#00b96b',
        // borderRadius: 5,
        // colorBgContainer: '#f6ffed',
        // colorTextBase: 'white',
        // colorPrimaryText: 
        
    },
    // algorithm: theme.darkAlgorithm
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

const menuItems: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

function App() {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const { t } = useTranslation();

    return (
        <ConfigProvider theme={config}> 
                        <Router>
            <Layout style={layoutStyle}>
                <Sider style={siderStyle} trigger={null} collapsed={collapsed} collapsible width="15%">
                    <div className="p-8 bg-indigo-600" />
                    <Menu theme="dark" mode="inline" items={menuItems} />
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: '64px',
                                height: '100%',
                                color: 'white'
                            }}
                        />
                        <ul className="flex align-middle w-full">
                            <li className={"mx-2.5"}>
                                <Typography.Link>
                                    <Link to="/">{t('home')}</Link>
                                </Typography.Link>
                            </li>
                            <li className={"mx-2.5"}>
                                <Typography.Link>
                                    <Link to="/profile">{t('profile')}</Link>
                                </Typography.Link>
                            </li>
                            <li className={'ml-auto flex align-middle pr-5'}>
                                <LanguageSelector />
                            </li>
                        </ul>
                    </Header>
                    <Content style={contentStyle}>
                        <Breadcrumb style={breadcrumbStyle}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                    </Content>
                    <Footer style={footerStyle}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
            
                        </Router>
        </ConfigProvider>
    );
}

export default App;
