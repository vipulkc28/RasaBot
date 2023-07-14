import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Basic from "./components/Basic";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    window.addEventListener('message', handleMessage);
  }, []);

  const handleMessage = event => {
    if (event.origin.includes('cmnetwork.co')) {
      window.userDetails = event.userData;
    }
  };
  return (
    <div className="App">
      <Basic />
    </div>
  );
}

export default App;
