import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityIndicator } from 'react-native';

import { Container, Text, Content } from './styles';

import { Creators as NotificationsActions } from '~/store/ducks/notifications';

import Header from '~/components/Header';

class Notifications extends Component {
  componentDidMount() {
    const { loadNotificationsRequest } = this.props;

    loadNotificationsRequest();
  }

  render() {
    const { loading, data } = this.props;

    return (
      <Container>
        <Header title="Welcome!" />
        <Content>
          {loading ? <ActivityIndicator size="small" color="#999" /> : <Text>{data.message}</Text>}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.notifications.error,
  loading: state.notifications.loading,
  data: state.notifications.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(NotificationsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications);
