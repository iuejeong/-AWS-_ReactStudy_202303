/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside";
import Todo from "./pages/Todo/Todo";
import { reset } from "./styles/Global/reset";
import * as S from './pages/Todo/style'

function App() {
  return (
    <>
    <div css={S.Container}>
      <Global styles={reset}/>
        <MainAside />
        <Routes>
          <Route path="/todo" Component={Todo}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
