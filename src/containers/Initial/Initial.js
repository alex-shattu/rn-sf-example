import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import settingsAction from 'store/actions/settings';
import styles from './styles';

const Initial = ({ restoreSettings, navigation }) => {
  useEffect(() => {
    restoreSettings();
    // return () => {
    //   cleanup
    // }
    navigation.navigate('main');
  }, [navigation, restoreSettings]);
  return (
    <View style={styles.container}>
      <Text style={{}}>Initial</Text>
    </View>
  );
};

Initial.propTypes = {};

const mapStateToProps = state => ({});

const { restoreSettings } = settingsAction;

const mapDispatchToProps = {
  restoreSettings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Initial);
