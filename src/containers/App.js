import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';


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
    const { robots, searchfield } = this.state;
    const filteredName = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    const filteredEmail = robots.filter(robot => {
      return robot.email.toLowerCase().includes(searchfield.toLowerCase());
    });
    const filteredRobots = [].concat(filteredName).concat(filteredEmail).filter((value, i, arr) => {
      return arr.indexOf(value) === i;
    });

    return filteredRobots;
  }

  render() {
    return (!this.state.robots.length ?
      (
        <div className='tc'>
          <h1 className='f1'>Loading...</h1>
        </div>
      ) :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={this.filterRobots()} />
          </Scroll>
        </div>
      )
    )
  }
}

export default App;