import { FC, ReactNode } from 'react';
import './styles.css'; 

interface ButtonPrimaryProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children, onClick }) => (
  <button className="button-primary" onClick={onClick}>
    {children ?? 'Click me'}
  </button>
);
