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
                    friendList:res.data.data
                })
                
            }
        )
        .catch(err => console.log(err))
    }

    render(){
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">My Friend: </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Age:</CardSubtitle>
          <CardText>Email Address:</CardText>
          <Button>Delete Friend</Button>
        </CardBody>
      </Card>
    </div>
  )};
};

export default Friends;