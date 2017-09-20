import React, { Component } from 'react'
import './App.css'

import 'bootswatch/paper/bootstrap.css'

import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap'

import Weather from './containers/wrapWeather'

const PLACES = [{ name: 'Tiraspol' }, { name: 'Berlin' }, { name: 'Ribnica' }]

class App extends Component {
  constructor() {
    super()
    this.state = {
      activePlace: 0
    }
  }
  render() {
    const activePlace = this.state.activePlace
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Sign IN
              </NavItem>
              <NavItem eventKey={2} href="#">
                Sign UP
              </NavItem>
            </Nav>
            <Navbar.Brand>Weather Sasha</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index })
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>
                    {place.name}
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <Weather key={activePlace} name={PLACES[activePlace].name} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
