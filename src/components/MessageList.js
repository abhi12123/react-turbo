// MessageList.js

import React, {Component} from 'react';


class MessageList extends Component {
  render(){
    return (
      <div>
        MessageList Component
      </div>
    )
  }
}

export default MessageList


constructor(props){
    super(props);
    this.state  = {
      messages: []
    }
  }
