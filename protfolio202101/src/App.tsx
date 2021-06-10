import React from 'react';
import RBNavbar from './components/RBNavbar';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import './custom.scss';


function App() {
  return (
    <div className="App">
      <RBNavbar />
      <Banner />
      <Welcome />
    </div>
  );
}

export default App;
