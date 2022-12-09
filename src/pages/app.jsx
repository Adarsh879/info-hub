import React, { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./auth/login-page";
import SignUpPage from "./auth/signup-page";
import DashBoard from "./dashboard";
import { AuthContext } from "../store/auth";
import Feeds from "./component/feed/feeds";
import "../static/css/variables.css";
import QuestionAskView from "./component/question-ask-view/question-ask-view";
import QuestionForm from "./component/question-ask-view/question-form/question-form";
import QuestionDetails from "./component/question-details/question-details";

var ask_view = (
  <QuestionAskView>
    <QuestionForm />
  </QuestionAskView>
);

var withAuth = (component, isAuthenticated) => {
  console.log("isAuthenticated:" + isAuthenticated());
  return isAuthenticated() ? component : <Navigate to="/login" />;
};

var withoutAuth = (component, isAuthenticated) =>
  isAuthenticated() ? <Navigate to="/" /> : component;

function App() {
  const { setAuthState, isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={withAuth(<DashBoard />, isAuthenticated)}>
        <Route index element={<Feeds />} />
        <Route path="ask" element={ask_view} />
        <Route
          path="/question/:questionId/:title"
          element={<QuestionDetails />}
        />
        <Route></Route>
      </Route>
      <Route
        path="/login"
        element={withoutAuth(<LoginPage />, isAuthenticated)}
      />
      <Route
        path="/signup"
        element={withoutAuth(<SignUpPage />, isAuthenticated)}
      />
    </Routes>
  );
}

export default App;
