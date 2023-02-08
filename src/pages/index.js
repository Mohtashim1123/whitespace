import React from "react"
import { Router } from "@reach/router"

import Home from "./homePage"
import Services from "./services";


const Index = () => (
  <Router>
    <Home path="/" />
    <Services path="/services" />
  </Router>
);

export default Index;