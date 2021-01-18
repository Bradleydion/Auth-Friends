import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Friends extends React.Component {
    state = {
        friendList:[]
    };

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