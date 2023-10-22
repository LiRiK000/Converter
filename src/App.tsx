import React, { useState } from 'react';
import Block, { IBlockProps as BlockProps } from './components/CommonComp/Block/Block';

function App() {
  const [rate, setRate] = useState();

  return (
    <div className="App">
      <Block
        value={0}
        currency="RUB"
        onChangeValue={(newValue: number | null) => {
          // Обработка изменения значения
        }}
        onChangeCurrency={(cur: string) => {
          console.log(cur);
        }}
      />
      <Block
        value={0}
        currency="USD"
        onChangeValue={(newValue: number | null) => {
          // Обработка изменения значения
        }}
        onChangeCurrency={(cur: string) => {
          console.log(cur);
        }}
      />
    </div>
  );
}

export default App;
