import React, { Component } from 'react'
import './App.css'

import 'bootswatch/paper/bootstrap.css'

import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap'

import { Route, Switch } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import Weather from './containers/wrapWeather'

const PLACES = [{ name: 'Tiraspol' }, { name: 'Berlin' }, { name: 'Ribnica' }]

const MyNavBar = () => (
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
)

class Cities extends Component {
  state = {
    activePlace: 0
  }
  render() {
    const activePlace = this.state.activePlace
    const match = this.props.match
    // console.log(this.props)
    return (
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
                <LinkContainer key={index} to={`/${place.name}`}>
                  <NavItem eventKey={index}>{place.name}</NavItem>
                </LinkContainer>
              ))}
            </Nav>
          </Col>
          <Col md={8} sm={8}>
            <Route exact path={`${match.url}:cityName`} component={Weather} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default () => (
  <div>
    <MyNavBar />
    <Switch>
      <Route path="/" component={Cities} />
    </Switch>
  </div>
)
