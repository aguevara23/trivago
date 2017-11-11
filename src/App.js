import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Hotels from './components/Hotels';
import Favorites from './components/Favorites';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderComponents = this.renderComponents.bind(this);
    this.viewFavorites = this.viewFavorites.bind(this);
    this.viewAllHotels = this.viewAllHotels.bind(this);
  }

  renderComponents() {
    const { all } = this.props.state;

    if (this.state.currentView) {
      return <Favorites />
    }

    return <Hotels hotels={all} />
  }

  viewFavorites() {
    this.setState({currentView: 1})
  }

  viewAllHotels() {
    this.setState({currentView: 0})
  }

  render() {
    return (
      <div>
        <Nav viewFavorites={this.viewFavorites} viewAllHotels={this.viewAllHotels}/>
        {this.renderComponents()}
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    state
  }
}
export default connect(mapStateToProps)(App);
