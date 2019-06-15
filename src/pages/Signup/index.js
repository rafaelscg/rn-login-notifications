import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StatusBar, ActivityIndicator } from 'react-native';

import { Creators as SignupActions } from '~/store/ducks/signup';

import {
  Container, Input, Button, Image, Form, ButtonText, Error, ErrorText,
} from './styles';

class Signup extends Component {
  state = {
    fullname: null,
    username: null,
    password: null,
    confirmPassword: null,
    error: false,
    errorText: null,
  };

  handleSignup = () => {
    const {
      fullname, username, password, confirmPassword,
    } = this.state;

    const { signupRequest } = this.props;

    if (password !== confirmPassword) {
      this.setState({ error: true, errorText: 'Confirm password does not match' });
      return false;
    }

    this.setState({ error: false });

    signupRequest(fullname, username, password);
  };

  render() {
    const {
      fullname, username, password, confirmPassword, error, errorText,
    } = this.state;

    const { loading } = this.props;

    return (
      <Container>
        <StatusBar backgroundColor="#962d3e" />

        <Form>
          <Image source={require('~/assets/logo-2x.png')} />

          {error && (
            <Error>
              <ErrorText>{errorText}</ErrorText>
            </Error>
          )}

          <Input
            placeholder="Full Name"
            value={fullname}
            onChangeText={text => this.setState({ fullname: text })}
          />
          <Input
            placeholder="Username"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => this.setState({ confirmPassword: text })}
          />

          <Button onPress={this.handleSignup}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <ButtonText>Sign Up</ButtonText>
            )}
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signup.error,
  loading: state.signup.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
