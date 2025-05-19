import { FC } from 'react';
import './styles.css'; 

interface AvatarCircleProps {
  src: string;
  alt?: string;
  size?: number;
}

export const AvatarCircle: FC<AvatarCircleProps> = ({ src, alt = '', size = 100 }) => (
  <div
    className="avatar-circle"
    style={{ width: size, height: size }}
  >
    <img src={src} alt={alt} />
  </div>
);
