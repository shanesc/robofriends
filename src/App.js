import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
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

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.filterRobots()} />
            </div>
        );
    }
}

export default App;