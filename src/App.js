// App.js

import React, { Component } from 'react';
import MessageList from './components/MessageList';
//import ChannelList from './components/ChannelList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class App extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyBhs8K0Nxw-62KW8z3QyWG91tQPWErKoHk",
    authDomain: "test-7bda4.firebaseapp.com",
    databaseURL: "https://test-7bda4.firebaseio.com",
    projectId: "test-7bda4",
    storageBucket: "test-7bda4.appspot.com",
    messagingSenderId: "844127294903"
    });
  }

  render(){
    return (
      <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
        </div>
    )
  }
}

export default App;
