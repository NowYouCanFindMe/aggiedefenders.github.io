import React, { Component } from 'react'
import firebase from 'firebase';
import { app, base } from '../../base';
const newSongStyles = {
  padding: '10px',


}
const user ={};
  var self = this;
// const currentUser= {};
class Input extends Component {
  constructor(props) {
    super(props)
    this.createMessage = this.createMessage.bind(this)

  }

  createMessage(event) {
    
    event.preventDefault()
    const date= Date.now();
    const title = this.titleInput.value
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.user = firebase.auth().currentUser;
    this.mRef = base.syncState(`messages`, {
          context: this,
          state: 'messages'
        });

    const messages = {};
    const id = Date.now();
    const email = user.email;
    const name = email.match(/^([^@]*)@/)[1];
    messages[id] = {
      id: id,
      content: title,
      time: id,
      owner: email,
      name: name,
     
    };

    this.setState({messages});
  

    this.messageForm.reset()
     } else {
    // No user is signed in.
    console.log('No User Info')
  }
});
  }//close

  render() {
    return (
      <div style={newSongStyles}>
        <form onSubmit={(event) => this.createMessage(event)} ref={(form) => this.messageForm = form }>
          <label className="pt-label">
            Enter Message   
          <input style={{width: "100%"}} className="pt-input" name="title" type="text" ref={(input) => { this.titleInput = input }} placeholder="Type message"></input>
          </label>
          <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Send"></input>
        </form>
      </div>
    )
  }
}

export default Input
