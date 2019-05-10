import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll.js';
import SearchBox from './SearchBox';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  filterRobots = () => {
    const filteredName = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    const filteredEmail = this.state.robots.filter(robot => {
      return robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    const filteredRobots = [].concat(filteredName).concat(filteredEmail).filter((value, i, arr) => {
      return arr.indexOf(value) === i;
    });

    return filteredRobots;
  }

  render() {
    if (this.state.robots.length === 0) {
      return (
        <div className='tc'>
          <h1 className='f1'>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={this.filterRobots()} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;