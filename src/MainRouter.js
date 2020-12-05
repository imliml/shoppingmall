import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./user/Login/Login";
import SignUp from "./user/SignUp/SignUp";
import ProductDetail from "./shop/ProductDetail/ProductDetail";
import ProductList from "./shop/ProductList/ProductList";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/pdp" component={ProductDetail} />
        <Route exact path="/list" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
