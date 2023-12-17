import styled from '@emotion/styled';

export function Sidebar() {
  return (
    <Aside>
      side
      <span>abc</span>
    </Aside>
  );
}

const Aside = styled.aside`
  background: #aaf;
  width: var(--side-width);
  padding: 16px;
  @media (max-width: 720px) {
    padding: 32px 24px;
    background: #33f;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 64px);
    display: none;
  }
`;
