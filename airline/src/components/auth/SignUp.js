import React, { Component } from 'react'
// import M from "materialize-css"

class SignUp extends Component {
    constructor(){
        super();
        this.state={
            email:'',password:'',firstName:'',lastName:'',role:null
        }
    }

    componentDidMount(){
        //M.FormSelect.init(this.FormSelect);
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDetails();
        let formDetails={
            details:this.state
        }
        console.log(formDetails)
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>

                    <div className="row">
                        <div className="input-field col s6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field col s6">
                            <label htmlFor="lastName">First Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange}/>
                        </div>        
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field col s6">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>        
                    </div>
                   
                    
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                        </div>
                    </form>
            </div>
        )
    }

}

export default SignUp