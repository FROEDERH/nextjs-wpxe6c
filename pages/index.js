import { useState } from 'react';
import Botao from '../componentes/botao/botao';

export default function Home() {
  const [value, setValue] = useState(0);

  function handleAddClick() {
    setValue(value + 1);
  }

  function handleRemoveClick() {
    setValue(value - 1);
  }
  

  return (
    <div>
      <div>Número {value} </div>
      <Botao text="Olá mundo" />
      <Botao text="Olá mundo" />

      <button onClick={handleAddClick}>Adicionar</button>
      <button onClick={handleRemoveClick}>Remover</button>
    </div>
  );
}
