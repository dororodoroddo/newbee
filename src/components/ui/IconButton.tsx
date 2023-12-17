import MyButton from './MyButton';

export type ButtonParams = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  : ReactNode;
};
/**
 * 
 * @param param0 
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  beforeIcon?: Icons;
  afterIcon?: Icons;
  className?: string;
 * @returns 
 */
const IconButton = ({ onClick, disabled, beforeIcon, afterIcon, children, className }: ButtonParams) => {
  return (
    <MyButton className={className} onClick={onClick} disabled={disabled}>
      {/*  */}
    </MyButton>
  );
};

export default IconButton;
