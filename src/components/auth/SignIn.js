import React,{Component} from "react"

class SignIn extends Component{
    state={
        email:"",
        password:""
    }
    handleChange=e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state)
    }
    
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <input type="email" id ="email"onChange={this.handleChange}placeholder="Email"/>
            <input type="password" id="password"onChange={this.handleChange}placeholder="password"/>
            <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default SignIn