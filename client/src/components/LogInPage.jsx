import React, { Component } from 'react';
import LogInForm from './LogInForm';

class LogInPage extends Component {

  render() {
    return (
      <section className="row">
        <div className="col-md-6 col-md-offset-3">
          <LogInForm />
        </div>
      </section>
    )
  }

}

export default LogInPage;