import React from 'react';
import Main from './Components/main/Main';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SocialConnect from './Components/main/SocialConnect/SocialConnect';
// import Auth from './Auth';

function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <Main/> */}
      
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
