/**
 * 혹시라도 겹치게 쓰지 않도록 -을 쓰지 않고 클래스명을 설정
 * (평소에는 -으로 숫자와 영어를 띄우기 때문)
 */
export type FontSize = FontBold | FontMiddle | FontHeader;

type FontHeader = 'h1' | 'h2' | 'h3' | 'h4';
type FontBold = 'b1' | 'b2' | 'b3' | 'b4';
type FontMiddle = 'm1' | 'm2' | 'm3' | 'm4';

export type FontColor = FontBlack | FontWhite;

type FontBlack = 'fb100' | 'fb80' | 'fb60' | 'fb40' | 'fb20';
type FontWhite = 'fw100' | 'fw80' | 'fw60' | 'fw40' | 'fw20';

export type Background = BackgroundBlack | BackgroundWhite;

type BackgroundBlack = 'bb100' | 'bb80' | 'bb60' | 'bb40' | 'bb20';
type BackgroundWhite = 'bw100' | 'bw80' | 'bw60' | 'bw40' | 'bw20';

export type BoxPreset = 'box1' | 'box2' | 'box3' | 'box4';

// Icon 목록은 https://fontawesome.com/icons에서 추가할 수 있다. TODO: 사이즈 커지면 파일분리
export type Icons = keyof typeof icons;

export const icons = {
  hamberger: 'fa-solid fa-bars', // 햄버거 메뉴
};
