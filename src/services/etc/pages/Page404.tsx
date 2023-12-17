import { css } from '@emotion/react';
import ContentImage from '../../../components/ui/ContentImage';
import Spacing from '../../../components/ui/Spacing';
import Text from '../../../components/ui/Text';

export default function Page404() {
  return (
    <article
      css={css`
        text-align: center;
      `}
    >
      <ContentImage
        src="/imgs/404.png"
        alt="not found"
        css={css`
          max-width: 50vh;
        `}
      />
      <Spacing val={32} />
      <Text text="페이지를 찾을 수 없습니다" fontSize="b1" />
    </article>
  );
}
