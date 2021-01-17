import React from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AddFriend = () => {

    return(
        // <div className="AddFriendCard">
        //     <input
        //     type="text"
        //     name="fullname"
        //     placeholder="Full Name"/>
        //     <input
        //     type="text"
        //     name="age"
        //     placeholder="Age"/>
        //     <input
        //     type="text"
        //     name="email"
        //     placeholder="Email"/>
        //     <button name="addFriend">Add Friend</button>
        // </div>

        <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="fullName" className="mr-sm-2">Friends Full Name</Label>
          <Input type="text" name="fullName" id="fullName" placeholder="Friends Full Name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="age" className="mr-sm-2">Age</Label>
          <Input type="age" name="age" id="age" placeholder="Age" />
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <Button>Add Friend</Button>
      </Form>
    );
}
export default AddFriend