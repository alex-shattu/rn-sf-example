import React, { useCallback, memo } from 'react';
import { View, Text, Platform } from 'react-native';
// import Ripple from 'react-native-material-ripple';
// import PropTypes from 'prop-types';
// import IconMI from 'react-native-vector-icons/MaterialIcons';
// import IconEI from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = ({ item, onClick, styles }) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleClick}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.Name}</Text>
        {/* <Text>Detail</Text>
      {() =>
        Platform.select({
          ios: <IconEI size={13} />,
          android: <IconMI size={14} />,
        })
      } */}
      </View>
    </TouchableOpacity>
  );
};

Item.propTypes = {};

export default memo(Item);
