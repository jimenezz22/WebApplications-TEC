import { FC } from 'react';
import './App.css';               
import { ButtonPrimary } from './uiverse/ButtonPrimary';
import { CardInfo }      from './uiverse/CardInfo';
import { AvatarCircle }  from './uiverse/AvatarCircle';

const App: FC = () => (
  <div className="container">
    <div className="box">
      <ButtonPrimary>¡Hola Uiverse!</ButtonPrimary>
    </div>
    <div className="box">
      <CardInfo 
        title="Bienvenido" 
        text="Este es un ejemplo de CardInfo utilizando CSS clásico." 
      />
    </div>
    <div className="box">
      <AvatarCircle 
        src="https://i.pravatar.cc/150?img=3" 
        alt="Avatar de ejemplo" 
        size={120} 
      />
    </div>
  </div>
);

export default App;
