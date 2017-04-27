import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { userSignUpRequest, isUserExists } from './../actions/signUpActions';
import { addFlashMessage } from './../actions/flashMessagesAction';

import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
  render () {

    const { userSignUpRequest, addFlashMessage, isUserExists } = this.props;

    return (
      <section className="row">
        <div className="col-md-8 col-md-offset-2">
          <SignUpForm isUserExists={isUserExists} userSignUpRequest={ userSignUpRequest } addFlashMessage={ addFlashMessage } />
        </div>
      </section>
    );
  }

}

SignUpPage.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired,
};

export default connect(null, { userSignUpRequest, addFlashMessage, isUserExists })(SignUpPage);