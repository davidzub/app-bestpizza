import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import LoginComponent from "./Pages/LoginComponent";
import ShopsComponent from "./Pages/ShopsComponent";
import LeftComponent from "./Components/Left/LeftComponent";
import ProductsComponent from "./Pages/ProductsComponent";
import AlertComponent from "./Components/General/AlertComponent";
import "./styles/App.css";
function App() {
  return (
    <Router>
      <main>
        <Container fluid className="background">
          <Row>
            <Col xs={12} md={5}>
              <LeftComponent />
            </Col>
            <Col xs={12} md={7} className="wrapper">
              <Switch>
                <PrivateRoute path="/shops" component={ShopsComponent} />
                <PrivateRoute
                  path="/products/:id"
                  component={ProductsComponent}
                />
                <Route path="/" component={LoginComponent} />
              </Switch>
            </Col>
          </Row>
          <AlertComponent />
        </Container>
      </main>
    </Router>
  );
}

export default App;
