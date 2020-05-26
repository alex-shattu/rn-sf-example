import React, { useCallback, memo } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Platform } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOI from 'react-native-vector-icons/Octicons';
import IconEI from 'react-native-vector-icons/EvilIcons';
import { oauth } from 'react-native-force';
import {
  DrawerContentScrollView,
  // DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import routes from 'constants/routes';
import themedStyles from './themedStyles';
import { useThemedStyles } from 'helpers/hooks';

const DrawerContent = props => {
  const logout = useCallback(() => {
    props.clearStore();
    oauth.logout(
      () => {
        console.log('SUCCESS LOGOUT');
      },
      error => {
        console.log('LOGOUT ERROR', error);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clearStore]);

  const theme = useTheme();
  const styles = useThemedStyles(themedStyles);

  return (
    <DrawerContentScrollView {...props} stickyHeaderIndices={[0]}>
      {/* <DrawerItemList {...props} /> */}
      <View style={[styles.titleWrapper, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>RN SF Example</Text>
      </View>
      <DrawerItem
        labelStyle={styles.label}
        label="Profile"
        key={routes.MY_PROFILE}
        onPress={() => props.navigation.navigate(routes.MY_PROFILE)}
        icon={() =>
          Platform.select({
            android: <IconMCI name="account-circle" size={30} color={theme.colors.primary} />,
            ios: <IconEI name="user" size={30} color={theme.colors.primary} />,
          })
        }
      />
      <DrawerItem
        labelStyle={styles.label}
        label="Settings"
        key={routes.SETTINGS}
        onPress={() => props.navigation.navigate(routes.SETTINGS)}
        icon={() =>
          Platform.select({
            android: (
              <IconI
                style={{ width: 30, display: 'flex', paddingHorizontal: 2 }}
                name="md-settings"
                size={30}
                color={theme.colors.primary}
              />
            ),
            ios: (
              <IconOI
                style={{ width: 30, display: 'flex', paddingHorizontal: 2 }}
                name="settings"
                size={30}
                color={theme.colors.primary}
              />
            ),
          })
        }
      />
      <DrawerItem
        labelStyle={styles.label}
        label="Logout"
        key="logout"
        onPress={logout}
        icon={() =>
          Platform.select({
            android: (
              <IconI
                style={{ width: 30, display: 'flex', paddingHorizontal: 2 }}
                name="md-log-out"
                size={30}
                color={theme.colors.primary}
              />
            ),
            ios: (
              <IconI
                style={{ width: 30, display: 'flex', paddingHorizontal: 2 }}
                name="ios-log-out"
                size={30}
                color={theme.colors.primary}
              />
            ),
          })
        }
      />
    </DrawerContentScrollView>
  );
};

export default memo(DrawerContent);
