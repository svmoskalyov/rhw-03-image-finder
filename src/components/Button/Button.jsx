import { StyledButton } from './Button.styled';

export const Button = ({
  type = 'button',
  icon: Icon = null,
  disabl = false,
  children,
  onClick,
  ...allyProps
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabl}
      onClick={onClick}
      {...allyProps}
    >
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
