import { ReactNode } from 'react';
import { Icons } from '../../constants/uiConstants';
import Icon from './Icon';

export type ButtonParams = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  beforeIcon?: Icons;
  afterIcon?: Icons;
  className?: string;
};
const MyButton = ({ onClick, disabled, beforeIcon, afterIcon, children, className }: ButtonParams) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {beforeIcon && <Icon iconKey={beforeIcon} iconSize="inherit" />}
      {children}
      {afterIcon && <Icon iconKey={afterIcon} iconSize="inherit" />}
    </button>
  );
};

export default MyButton;
