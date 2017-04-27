import React,{ Component } from 'react';

export default class Greetings extends Component {

  render () {
    return (
            <div className="container">      
      <div className="panel panel-primary">
      <div className="panel-heading">
        <h2>Welcome</h2></div>
        <div className="panel-body">
        <h3 className="text-success">Greetings From React Node Express PostGreSQL</h3>
        </div>
      </div>
      </div>
    );
  }
}