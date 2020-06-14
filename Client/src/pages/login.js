import React, { Component } from 'react'
import UserConsumer from '../context'
import { Redirect } from "react-router-dom"

export default class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (dispatch,e) => {
        e.preventDefault()
        dispatch({type : "LOGIN" ,email:this.state.email,password:this.state.password });
    }

    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch,user } = value;
                        if(user) {
                            return <Redirect to='/home'/>
                        }
                        return (
                            <main className='main'>
                                <div className="content">
                                    <div className="container-fluid pb-5">
                                        <div className="row justify-content-md-center">
                                            <div className="card-wrapper col-12 col-md-4 mt-5">
                                                <div className="brand text-center mb-3">
                                                    <a href="/"><img src="public/img/logo.png" /></a>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title">Login</h4>
                                                        <form onSubmit={this.submitHandler.bind(this, dispatch)}>
                                                            <div class="form-group">
                                                                <label for="email">E-Mail Address</label>
                                                                <input id="email" type="email" class="form-control" name="email" required="" autofocus=""
                                                                    name="email"
                                                                    value={this.state.email}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </div>

                                                            <div class="form-group">
                                                                <label for="password">Password
										</label>
                                                                <input id="password" type="password" class="form-control" name="password" required=""
                                                                    name="password"
                                                                    value={this.state.password}
                                                                    onChange={this.changeHandler}
                                                                />
                                                                <div class="text-right">
                                                                    <a href="password-reset.html" class="small">
                                                                        Forgot Your Password?
											</a>
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <div className="form-check position-relative mb-2">
                                                                    <input type="checkbox" className="form-check-input d-none" id="remember" name="remember" />
                                                                    <label className="checkbox checkbox-xxs form-check-label ml-1" for="remember"
                                                                        data-icon="&#xe936">Remember Me</label>
                                                                </div>
                                                            </div>

                                                            <div class="form-group no-margin">
                                                                <button class="btn btn-primary btn-block">
                                                                    Sign In
										</button>
                                                            </div>
                                                            <div className="text-center mt-3 small">
                                                                Don't have an account? <a href="register.html">Sign Up</a>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <footer className="footer mt-3">
                                                    <div className="container-fluid">
                                                        <div className="footer-content text-center small">
                                                            <span className="text-muted">&copy; 2019 Graindashboard. All Rights Reserved.</span>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
