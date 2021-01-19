import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

class Friends extends React.Component {
    state = {
        friendList:[]
    };
    componentDidMount() {
        this.getData();
    }
  
    getData = () => {
        axiosWithAuth().get("/api/friends")
        .then(
            res => {
                console.log(res);
                this.setState({
                    friendList:res.data
                })
            }
        )
        .catch(err => console.log(err))
    }
//   delete= (e) =>{
//       console.log(e)
//     axiosWithAuth().delete(`/api/friends/${e}`)
//     .then(
//         res =>{
//             console.log(res)
//         }
        
//     )
      
//   }

    render(){
        console.log(this.state.friendList)
  return (
    <div>
        {this.state.friendList.map(friend =>
        <Card key={friend.id}>
        <CardBody>
          <CardTitle tag="h5">My Friend:{friend.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Age:{friend.age}</CardSubtitle>
          <CardText>Email Address:{friend.email}</CardText>
          <Button >Delete Friend</Button>
        </CardBody>
      </Card>)}
      
    </div>
  )};
};

export default Friends;