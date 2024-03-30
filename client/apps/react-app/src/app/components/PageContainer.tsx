import { Typography } from 'antd';

interface PageContainerProps extends React.PropsWithChildren {
    title: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
    return <div className="p-3 h-full">
        <Typography.Title level={2}>{title}</Typography.Title>
        <div style={{ height: 'calc(100% - 38px)' }}>
            {children}
        </div>
    </div>
};

export default PageContainer;