import React, { Component } from 'react'
import axios from 'axios'


export default class login extends Component {

  constructor(props) {
		super(props)

		this.state = {
			nickName: 'mitarashj',
			password: '1995faruk*'
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://api.easy-menu.net/login', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
            })
          
      
	}



    render() {
        const { nickName, password } = this.state;

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
                                        <form onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                        <label for="email">E-Mail id: </label>
                                        <input
                                        type="text"
                                        name="nickName"
                                        value={nickName}
                                        onChange={this.changeHandler}
                                        
                                        
                                        />
                                    </div>
                                            

                                            <div className="form-group">
                                                <label for="password">Password
										</label>
                                                <input  
                                                type="text"
                                                name="password"
                                                value={password}
                                                onChange={this.changeHandler} 
                                                
                                                />
                                                <div className="text-right">
                                                    <a href="password-reset.html" className="small">
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

                                            <div className="form-group no-margin">
                                                <button  className="btn btn-primary" href="/App">Login</button>
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
