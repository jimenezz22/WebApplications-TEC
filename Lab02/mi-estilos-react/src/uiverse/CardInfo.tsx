import { FC } from 'react';
import './styles.css'; 

interface CardInfoProps {
  title: string;
  text: string;
}

export const CardInfo: FC<CardInfoProps> = ({ title, text }) => (
  <div className="card-info">
    <h2 className="card-info__title">{title}</h2>
    <p className="card-info__text">{text}</p>
  </div>
);
