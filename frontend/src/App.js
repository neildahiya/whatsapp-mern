import React from "react";
import Chatroom from "./components/Chatroom/Chatroom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/chat" exact component={Chatroom}></Route>
          <Route path="/" exact component={LoginPage}></Route>
          <Route path="/signup" exact component={SignUpPage}></Route>
          {/* <LoginPage />
          <Chatroom></Chatroom> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
