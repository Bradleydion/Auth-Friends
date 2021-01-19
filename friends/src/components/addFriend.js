import React from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
class AddFriend extends React.Component{

  state ={
      newFriend:{
            id:Date.now,
            name:'',
            age:'',
            email:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            newFriend:{
                ...this.state.newFriend,
                [e.target.name]:e.target.value}
            })

    }
    addFriend= (e) =>{
        e.preventDefault()
        axiosWithAuth().post('/api/friends', this.state.newFriend)
        .then(
            res => {
                console.log(res)
            }

        )
        .catch(err=>{
            console.log(err)
        }

        )}

    render(){
    return(
        <Form >
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="fullName" className="mr-sm-2">Friends Full Name</Label>
          <Input onChange ={this.handleChange} value={this.state.newFriend.name}type="text" name="name" id="fullName" placeholder="Friends Full Name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="age" className="mr-sm-2">Age</Label>
          <Input onChange ={this.handleChange} value={this.state.newFriend.age} type="text" name="age" id="age" placeholder="Age" />
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input onChange ={this.handleChange} value={this.state.newFriend.email}type="email" name="email" id="exampleEmail" placeholder="something@idk.cool"/>
        </FormGroup>
        <Button onClick={this.addFriend}>Add Friend</Button>
      </Form>
    );}
}
export default AddFriend