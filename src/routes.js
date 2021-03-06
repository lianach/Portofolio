import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HomePage, AllWorks, About, SingleWorkPage } from './components'

class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/projects' component={AllWorks} />
        <Route path='/about' component={About} />
        <Route path='/MushroomMarket' component={SingleWorkPage} />
        <Route path='/StudyBuddy' component={SingleWorkPage} />
        <Route path='/Harmonious' component={SingleWorkPage} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Redirect to="/home" />
      </Switch>
    )
  }
}
export default withRouter(Routes)
