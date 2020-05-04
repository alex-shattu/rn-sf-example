import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import { oauth } from 'react-native-force';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

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
        icon={() => (
          // <TouchableOpacity onPress={() => {}} style={styles.icon}>
          <IconI name="ios-log-out" size={30} color={theme.colors.primary} />
          // </TouchableOpacity>
        )}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'center',
  },
  titleWrapper: {
    height: 40,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
});

export default DrawerContent;
