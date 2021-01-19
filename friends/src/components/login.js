import React from "react"
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Login extends React.Component{
  state = {
    credentials: {
      username: '',
      password: '',
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", this.state.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/protected");
    })
    .catch(err => console.log(err))
  }



  render(){
    return (
          <Form onSubmit={this.login} inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Username</Label>
        <Input type="text" name="username" id="username" value={this.state.credentials.username} onChange={this.handleChange}placeholder="Username" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" value={this.state.credentials.password} onChange={this.handleChange} placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );

}
}

export default Login