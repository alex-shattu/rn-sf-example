import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import { oauth } from 'react-native-force';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import styles from './styles';

const DrawerContent = ({ theme, ...props }) => {
  const logout = useCallback(() => {
    oauth.logout(
      () => {
        console.log('SUCCESS LOGOUT');
      },
      error => {
        console.log('LOGOUT ERROR', error);
      },
    );
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View
        style={[
          styles.titleWrapper,
          { borderBottomColor: theme.colors.text, backgroundColor: theme.colors.card },
        ]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>RN SF Example</Text>
      </View>
      <DrawerItem
        label="Logout"
        onPress={logout}
        icon={() => <IconI name="ios-log-out" size={30} color={theme.colors.primary} />}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
