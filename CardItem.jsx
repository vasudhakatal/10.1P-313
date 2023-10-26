import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import './card.css'

function card(props){
    return( <div className="column">
        <Card>
    <Image src= {props.Image} height = {250} width = {250} />
    <Card.Content>
      <Card.Header>{props.Name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.Date}</span>
      </Card.Meta>
      <Card.Description>
        {props.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.Friends}
      </a>
    </Card.Content>
  </Card>
  </div>
    )
}
export default card