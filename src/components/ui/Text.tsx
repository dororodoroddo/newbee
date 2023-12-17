import clsx from 'clsx';
import { FontColor, FontSize } from '../../constants/uiConstants';
import { CSSProperties } from 'react';
import { Interpolation, Theme } from '@emotion/react';

export type TextParams = {
  text: string;
  className?: string;
  isBlock?: boolean;
  fontSize?: FontSize;
  fontColor?: FontColor;
  textAlign?: CSSProperties['textAlign'];
  wordBreak?: CSSProperties['wordBreak'];
  whiteSpace?: CSSProperties['whiteSpace'];
  css?: Interpolation<Theme>;
};

const Text = ({ fontSize, text, wordBreak, fontColor, className, whiteSpace, textAlign, isBlock, css }: TextParams) => {
  return (
    <span
      css={css}
      className={clsx([className, fontSize, fontColor])}
      style={{
        wordBreak: wordBreak ?? 'inherit',
        whiteSpace: whiteSpace ?? 'inherit',
        textAlign: textAlign ?? 'start',
        display: isBlock ? 'block' : 'inline',
      }}
    >
      {text}
    </span>
  );
};

export default Text;
