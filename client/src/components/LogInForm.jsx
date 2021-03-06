import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from './common/TextFieldGroup';
import { login } from '../actions/authActions';

import { Link, Router, Route, hashHistory, browserHistory  } from 'react-router';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.identifier)) {
    errors.identifier = 'This field is required';
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors, });
    }

    return isValid;
  }
  
  onCancel(evt) {
      evt.preventDefault();
      browserHistory.push('/');
     
  }

  onSubmit(evt) {
    evt.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/greetings'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false, })
      );
    }
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
            
        
      <div className="panel panel-success">  
      <div className="panel-heading"><h4 className="text-danger text-center">Sign In</h4></div> 
      <div className="panel-body">  
      <form onSubmit={ this.onSubmit }>
       
        <br/>

        { errors.form && <section className="alert alert-danger">{ errors.form }</section> }

        <TextFieldGroup
          field="identifier"
          label="User Name / Email"
          value={ identifier }
          error={ errors.identifier }
          onChange={ this.onChange }
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={ password }
          error={ errors.password }
          onChange={ this.onChange }
          type="password"
        />

        <section className="form-group">
          <button className="btn btn-success" disabled={ isLoading }>Log In</button>&nbsp;&nbsp;
          <button className="btn btn-warning" onClick={ this.onCancel }>Cancel</button>
        </section>
      </form>
      </div>
      </div>
    )
  }

}

LogInForm.propTypes = {
  login: React.PropTypes.func.isRequired,
};

LogInForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default connect(null, { login })(LogInForm);