import './App.css';
import React from "react";
import SimpleTabs from './SimpleTabs';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import Todo from "./Todo";
import Filter from './Filter';

function App() {
  return (
    
      <div>
      <a href="/todo">TodoList</a>
      <a href="/filter">Filter</a>
      {/* <SimpleTabs></SimpleTabs> */}
      {/* <button onClick={changeTodo}>Todo list</button>
      <button onClick={changeFilter}>Filter option</button> */}
      <Switch>
        <Route path="/todo" component={Todo}></Route>
        <Route path="/filter" component={Filter}></Route>
      </Switch>


    </div>
   
    
  );
}

export default App;
