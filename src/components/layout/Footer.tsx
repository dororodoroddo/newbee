import styled from '@emotion/styled';
import Text from '../ui/Text';

export function Footer() {
  return (
    <FooterEl>
      <Text text="도로로도로또 블로그" isBlock={true} />
      <Text text="이메일" isBlock={true} />
      <Text text="깃허브" isBlock={true} />
      <Text text="기타" isBlock={true} />
      <Text text="." isBlock={true} />
      <Text text="assets" isBlock={true} />
      <Text text="본문 내용이 아닌 사이트를 이루는 구성요소 이미지는 pixabay.com에서 가져왔습니다." isBlock={true} />
      <Text
        text="본문 내용이 아닌 사이트를 이루는 구성요소 아이콘은 fontawesome.com의 무료 라이센스를 이용중입니다."
        isBlock={true}
      />
    </FooterEl>
  );
}

const FooterEl = styled.footer`
  background: #999;
  min-height: 200px;
  padding: 24px;
  @media (max-width: 720px) {
    width: 100vw;
  }
`;
