import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { View } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';

import styles from './styles';

class Main extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
