import React from 'react';

function Food({ fav }) {
  return <h3>i like {fav}</h3>
  
}

function App() {
  return (
    <div >
      <h1>
      Hello!!!
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />  
      </h1>
    </div>
  );
}

export default App;
