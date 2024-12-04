import { Outlet } from 'react-router-dom';
import theme from 'theme/theme';
import styled from '@emotion/styled';

const LayoutStyle = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  aligh-items: flex-start;
  background-color: ${theme.color.white};
`;

const MainLayout = () => {
  return (
    <LayoutStyle>
      <Outlet />
    </LayoutStyle>
  );
};

export default MainLayout;
