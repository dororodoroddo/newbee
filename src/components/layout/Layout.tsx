import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import styled from '@emotion/styled';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Content>
        <Sidebar />
        <RouteWrapper className="">
          <RouteDiv>{children}</RouteDiv>
        </RouteWrapper>
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top: 64px;
  --side-width: 300px;
  @media (max-width: 960px) {
    --side-width: 200px;
    padding-top: 48px;
  }
  @media (max-width: 720px) {
    display: block;
  }
`;

const RouteWrapper = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 64px - 200px);
  @media (max-width: 960px) {
    min-height: calc(100vh - 48px - 200px);
  }
`;

const RouteDiv = styled.div`
  background: #afa;
  width: 100%;
  max-width: 1080px;
  padding: 64px 48px;
  @media (max-width: 720px) {
    padding: 40px 24px;
  }
`;
