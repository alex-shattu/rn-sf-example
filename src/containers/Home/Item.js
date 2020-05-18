import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Icon } from 'react-native-elements';
import getScaledFontSize from 'services/getScaledFontSize';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

function Item({ item, fontAddSize, onClick }) {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  const theme = useTheme();

  return (
    <ListItem
      onPress={handleClick}
      title={item.Name}
      subtitle={item.Email}
      leftAvatar={() => (
        <Icon
          name="account-circle"
          color={theme.colors.text}
          size={getScaledFontSize(20, fontAddSize)}
        />
      )}
      right={() => <Icon name="arrow-right" />}
      containerStyle={{
        backgroundColor: theme.colors.card,
      }}
      titleStyle={[
        styles.titleStyle,
        { color: theme.colors.text, fontSize: getScaledFontSize(16, fontAddSize) },
      ]}
      subtitleStyle={{ color: theme.colors.text }}
      bottomDivider
    />
  );
}

Item.propTypes = {};

export default Item;
