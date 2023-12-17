import styled from '@emotion/styled';
import Text from '../ui/Text';
import Icon from '../ui/Icon';
import { useAtomValue } from 'jotai';
import { CollapseAtom } from '../../atom/uiAtoms';
import ModalPortal from '../portal/ModalPortal';

export function Header() {
  const isCollapsed = useAtomValue(CollapseAtom);
  return (
    <HeaderEl>
      <Banner src="/imgs/dororodoroddo.png" alt="도로로도로또 배너" />
      <Text text="dororodoroddo" className="banner-logo" fontSize="h2" />
      {isCollapsed && <Icon iconKey="hamberger" iconSize={24} />}
      {isCollapsed && (
        <ModalPortal>
          <Text text="modal 테스트" />
        </ModalPortal>
      )}
    </HeaderEl>
  );
}
const Banner = styled.img`
  height: 48px;
  @media (max-width: 960px) {
    height: 32px;
  }
`;

const HeaderEl = styled.header`
  position: fixed;
  // iphone에서 간혹 상단 1픽셀 비치는 문제 해결
  top: -1px;
  height: 65px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #faa;
  padding: 1px 16px 0;
  z-index: var(--z-index-header);
  @media (max-width: 960px) {
    padding: 0 12px;
    height: 49px;
  }
`;
