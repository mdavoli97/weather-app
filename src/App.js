import React from 'react';
import ClimateWidget from './components/ClimateWidget';

function App() {
 
  const cities = ["Montevideo", "Paris", "New York"] 

  const items = []
  cities.forEach((value) => items.push(<ClimateWidget city={value}></ClimateWidget>)) 

  return (
    <main>
      {items}
    </main>
  );
}

export default App;