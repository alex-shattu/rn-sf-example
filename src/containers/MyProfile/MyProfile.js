import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const MyProfile = () => {
  const theme = useTheme();
  
  return (
    <View>
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
