import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield:''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots:user}));
    }
    render(){
        const {robots, searchfield} =this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
            return <h1> Loading</h1>;
        }else {
            return (
                <div className = 'tc'>
                    <h1 className='f1'>
                        My RobotsFriends
                    </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;