import styled from '@emotion/styled';
import { ReactNode } from 'react';
import ReactDom from 'react-dom';

const ModalFrame = ({ children }: { children: ReactNode }) => {
  return (
    <Dimmed className="bb60">
      <ModalBody className="box1 bw100">{children}</ModalBody>
    </Dimmed>
  );
};

const Dimmed = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-index-modal-dimmed);
`;

const ModalBody = styled.div`
  z-index: var(--z-index-modal-body);
`;

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById('modal-portal') as HTMLDivElement;
  return ReactDom.createPortal(<ModalFrame>{children}</ModalFrame>, el);
};

export default ModalPortal;
