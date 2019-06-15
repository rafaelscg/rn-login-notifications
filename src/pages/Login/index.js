import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityIndicator, StatusBar } from 'react-native';

import { Creators as LoginActions } from '~/store/ducks/login';

import {
  Container,
  Input,
  Text,
  Button,
  Image,
  Form,
  ButtonText,
  Error,
  ErrorText,
} from './styles';

class Login extends Component {
  state = {
    username: null,
    password: null,
  };

  goToSignup = () => {
    const { navigation } = this.props;

    navigation.navigate('Signup');
  };

  handleSignin = () => {
    const { username, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username, password);
  };

  render() {
    const { error, loading } = this.props;
    const { username, password } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="#962d3e" />

        <Form>
          <Image source={require('~/assets/logo-2x.png')} />

          {error && (
            <Error>
              <ErrorText>Username or password is invalid</ErrorText>
            </Error>
          )}

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

          <Text direction="right">Forgot password</Text>

          <Button onPress={this.handleSignin}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <ButtonText>Sign in</ButtonText>
            )}
          </Button>

          <Text>Dont you have an account</Text>

          <Button action="signup" onPress={this.goToSignup}>
            <ButtonText>Sign up</ButtonText>
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
