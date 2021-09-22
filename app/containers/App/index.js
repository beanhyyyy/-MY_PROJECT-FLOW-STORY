/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import HomePage from "containers/Page/HomePage/Loadable";
import NotFoundPage from "containers/Page/NotFoundPage/Loadable";
import SchoolPage from "../Page/SchoolPage/Loadable";

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Helmet titleTemplate="%s - VLU" defaultTitle="VLU">
        <meta name="description" content="A VLU application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/SchoolPage" component={SchoolPage} />
      
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <GlobalStyle /> */}
    </>
  );
}
