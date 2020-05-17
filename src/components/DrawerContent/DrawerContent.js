import React, { useCallback, memo } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Platform } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { oauth } from 'react-native-force';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import routes from 'constants/routes';

const DrawerContent = props => {
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

  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props} stickyHeaderIndices={[0]}>
      {/* <DrawerItemList {...props} /> */}
      <View style={[styles.titleWrapper, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>RN SF Example</Text>
      </View>
      <DrawerItem
        label="Profile"
        key={routes.MY_PROFILE}
        onPress={() => props.navigation.navigate(routes.MY_PROFILE)}
        icon={() =>
          Platform.select({
            android: <IconMCI name="account-circle" size={30} color={theme.colors.primary} />,
            ios: <IconFA name="user-circle" size={30} color={theme.colors.primary} />,
          })
        }
      />
      <DrawerItem
        label="Settings"
        key={routes.SETTINGS}
        onPress={() => props.navigation.navigate(routes.SETTINGS)}
        icon={() =>
          Platform.select({
            android: <IconI name="md-settings" size={30} color={theme.colors.primary} />,
            ios: <IconI name="ios-settings" size={30} color={theme.colors.primary} />,
          })
        }
      />
      <DrawerItem
        label="Logout"
        key="logout"
        onPress={logout}
        icon={() =>
          Platform.select({
            android: <IconI name="md-log-out" size={30} color={theme.colors.primary} />,
            ios: <IconI name="ios-log-out" size={30} color={theme.colors.primary} />,
          })
        }
      />
    </DrawerContentScrollView>
  );
};

export default memo(DrawerContent);
