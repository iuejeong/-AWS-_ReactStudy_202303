
import { Route, Routes } from "react-router-dom";
import InputSample from "./pages/InputSample/InputSample";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import MainAside from "./components/Aside/MainAside/MainAside";
import { Global } from "@emotion/react";
import { reset } from "./styles/Global/reset";
import UserList from "./pages/UserList/UserList";
import Todo from "./pages/Todo/Todo";
import NumberCounter from "./pages/NumberCounter/NumberCounter";
import TodoProject from "./project/TodoProject";


function Test1() {
  return (<h1>Test1</h1>)
}

function Test2() {
  return (<h1>Test2</h1>)
}


function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainAside />
      <Routes>  
        <Route path="/t1" Component={Test1}/>
        <Route path="/t2" Component={Test2}/>
        <Route path="/sample/input/1" Component={InputSample}/>
        <Route path="/users" Component={UserList}/>
        <Route path="/todo" Component={Todo}/>
        <Route path="/number/counter" Component={NumberCounter}/>
        <Route path="/todo/project" Component={TodoProject}/>
      </Routes>
    </>
  );
}

export default App;


