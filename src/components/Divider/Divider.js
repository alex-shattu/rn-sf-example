import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Divider = props => {
  const {
    offsetColor = 'white',
    offsetLeft = 0,
    offsetRight = 0,
    color = 'gray',
    height = 2,
  } = props;

  return (
    <View
      style={{
        backgroundColor: offsetColor,
        height,
        paddingLeft: offsetLeft,
        paddingRight: offsetRight,
      }}>
      <View style={{ backgroundColor: color, height }} />
    </View>
  );
};

Divider.propTypes = {
  offsetRight: PropTypes.number,
  offsetLeft: PropTypes.number,
  offsetColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
};

export default memo(Divider);
