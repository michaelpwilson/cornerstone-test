import React from 'react';

import styled from 'styled-components';
import './App.css';

import BeersContainer from "./Beers";
import BeerContainer from "./Beer";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppTitle = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  background-color: #ffffff;
  text-align: center;
  padding: 0.5em 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.13);
`;

const AppBody = styled.div`
  padding-top: 3.5em;
`;

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppTitle>Punk Beers</AppTitle>
          <AppBody>
            <Switch>
              <Route exact path="/" component={BeersContainer} />
              <Route path="/beer/:id" component={BeerContainer} />
            </Switch>
          </AppBody>
        </div>
      </BrowserRouter>
    );
  }
}