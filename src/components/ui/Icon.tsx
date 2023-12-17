import { Icons, icons } from '../../constants/uiConstants';

export type IconParams = {
  iconKey: Icons;
  iconSize?: number | string;
};

const Icon = ({ iconKey, iconSize }: IconParams) => {
  const size = typeof iconSize === 'number' ? `${iconSize}px` : iconSize ?? '24px';

  return (
    <i
      className={icons[iconKey]}
      style={{
        height: size,
        lineHeight: size,
        fontSize: size,
      }}
    />
  );
};

export default Icon;
