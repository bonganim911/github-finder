import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar'
import Users from './component/users/User'
import Search from './component/Search'
import axios from 'axios';


class App extends React.Component {

    state = {
        users: [],
        loading: false
    };

    async componentDidMount() {
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP__GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data, loading: false});
    }

    clearState = () => {
        this.setState({users: [], loading: false});
    };

    searchUser = async text => {
        this.setState({loading: true});
        const response = await axios.get(`https://api.github.com/search/users?q=${text}
                                &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
                                &client_secret=${process.env.REACT_APP__GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data.items, loading: false});
    };

    render() {
        const {users, loading} = this.state;
        return (
            <div className="App">
                <Navbar/>
                <Search  searchUsers={this.searchUser}
                         clearUsers={this.clearState}
                         showClear={users.length > 0}

                />
                <Users users={users} loading={loading}/>
            </div>
        );
    };
};

export default App;
