import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{return response.json();})
        .then(users =>this.setState({robots: users}));
        }

    onSearchChange = (evt) => {
        this.setState({searchfield: evt.target.value});
    }

    render(){
    const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    if (this.state.robots.length === 0)
    {
        return <h1>Loading</h1>
    } 
    else{
        return (
            <div className='tc'>
            <h1 className="title">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>

            <CardList robots = {filteredRobots}/>

            </div>
            );
        }}}

export default App;