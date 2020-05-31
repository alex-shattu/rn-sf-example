import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { Platform, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Home from 'containers/Home/Home';
import User from 'containers/User/User';
import Settings from 'containers/Settings';
import MyProfile from 'containers/MyProfile';
import routes from 'constants/routes';
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  const theme = useTheme();
  const handleOpenDrawer = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitleAlign: Platform.select({ ios: 'center', android: 'left' }),
        headerStyle: {
          backgroundColor: Platform.select({
            android: theme.colors.background,
            ios: theme.colors.card,
          }),
          // shadowOpacity: 0,
          // elevation: 0,
        },
        headerTitleStyle: {
          color: theme.colors.primary,
        },
        headerBackImage: Platform.select({
          android: () => <IconMCI name={'arrow-left'} size={30} color={theme.colors.primary} />,
          ios: undefined,
        }),
      }}
      headerMode={Platform.select({ android: 'screen', ios: 'float' })}>
      <Stack.Screen
        name={routes.HOME}
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={handleOpenDrawer} style={styles.headerLeftIcon}>
              <IconI
                name={Platform.select({ ios: 'ios-menu', android: 'md-menu' })}
                size={Platform.select({ android: 30, ios: 30 })}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          ),
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name={routes.USER}
        component={User}
        options={{
          headerTitle: 'User',
          // headerBackTitle: Platform.select({ ios: 'Home' }),
          headerBackTitleVisible: Platform.OS === 'ios',
        }}
      />
      <Stack.Screen
        name={routes.SETTINGS}
        component={Settings}
        options={{
          headerTitle: 'Settings',
          headerBackTitle: Platform.select({ ios: 'Home' }),
          headerBackTitleVisible: Platform.OS === 'ios',
        }}
      />
      <Stack.Screen
        name={routes.MY_PROFILE}
        component={MyProfile}
        options={{
          headerTitle: 'Profile',
          headerBackTitle: Platform.select({ ios: 'Home' }),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRightIcon: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerLeftIcon: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});

export default HomeStack;
