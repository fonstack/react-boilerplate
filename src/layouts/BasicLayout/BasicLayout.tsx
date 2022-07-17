import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components';
import { AppLayout, PageContainer } from '../styles';

const BasicLayout = (): JSX.Element => {
  return (
    <AppLayout>
      <TopBar />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </AppLayout>
  );
};

export default BasicLayout;
