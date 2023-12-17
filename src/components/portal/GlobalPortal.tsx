import { ReactNode } from 'react';
import ReactDom from 'react-dom';

const GlobalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById('global-portal') as HTMLDivElement;
  return ReactDom.createPortal(children, el);
};

export default GlobalPortal;
