import React, { Component } from 'react';
import axios from 'axios';

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
    state = {
        user: null,
        dispatch: action => {
            this.reducer(action)
        }
    }

    reducer = (action) => {
        switch (action.type) {
            case "LOGIN":
                axios.post(`api/login?email=${action.email}&pw=${action.password}`)
                .then(obj => {
                    if(obj.data !== 'incorrect'){
                        this.setState({user:obj.data});
                    }
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;