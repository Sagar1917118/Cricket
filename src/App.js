import LandingPage from './Components/LandingPage';
import React from "react";
import ThreeDScene from "./ThreeDScene";
import NavScrollExample from './Components/NavScrollExample';
const App = () => {
  return (
    <div className='App'>
        <NavScrollExample></NavScrollExample>
        <ThreeDScene />
        <LandingPage></LandingPage>n
    </div>
  );
};

export default App;
