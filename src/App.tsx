import { Routes } from './components/layout/Routes';
import { Layout } from './components/layout/Layout';
import './assets/css/global.scss';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { CollapseAtom } from './atom/uiAtoms';

export default function App() {
  const setCollapse = useSetAtom(CollapseAtom);

  useEffect(() => {
    const resizeListener = () => {
      setCollapse(window.innerWidth <= 720);
    };

    resizeListener();

    window.addEventListener('resize', resizeListener, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [setCollapse]);

  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}
