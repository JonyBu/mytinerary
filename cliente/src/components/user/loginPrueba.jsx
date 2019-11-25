import React from 'react';
import Footer from '../footer';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;
        console.log(state)
        this.setState(state);
    }

    onSave = () => {
        axios.post()
    }

    render() {
        return (
            <div>
                <h1>login</h1>
                <form action=''>
                    <label htmlFor="">
                        UserName:
                    <input name="userName" value={this.state.userName} type="text" onChange={this.onChange} />
                    </label>
                    <label htmlFor="">
                        password:
                    <input name="password" value={this.state.password} type="password" onChange={this.onChange} />
                    </label>
                </form>
                <button >Ok</button>
                <Footer />
            </div>
        )
    }
}

export default Login;