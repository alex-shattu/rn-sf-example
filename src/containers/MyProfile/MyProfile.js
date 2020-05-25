import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';

export const MyProfile = () => {
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
    </View>
  );
};

MyProfile.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfile);
