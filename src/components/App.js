import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        
        </div>
        
    </React.Fragment>
  );
}

export default App;
