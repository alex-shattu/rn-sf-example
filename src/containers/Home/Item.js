import React, { useCallback, memo } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
// import { ListItem, Icon } from 'react-native-elements';
// import styles from './styles';
import { useTheme } from '@react-navigation/native';
// import styles from 'components/Preloader/styles';

const Item = ({ item, onClick, styles }) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.Name}</Text>
    </View>
    // <ListItem
    //   onPress={handleClick}
    //   title={item.Name}
    //   subtitle={item.Email}
    //   leftAvatar={() => (
    //     <Icon
    //       name="account-circle"
    //       color={theme.colors.text}
    //       size={getScaledFontSize(20, fontAddSize)}
    //     />
    //   )}
    //   right={() => <Icon name="arrow-right" />}
    //   containerStyle={{
    //     backgroundColor: theme.colors.card,
    //   }}
    //   titleStyle={[
    //     styles.titleStyle,
    //     { color: theme.colors.text, fontSize: getScaledFontSize(16, fontAddSize) },
    //   ]}
    //   subtitleStyle={{ color: theme.colors.text }}
    //   bottomDivider
    // />
  );
};

Item.propTypes = {};

export default memo(Item);
