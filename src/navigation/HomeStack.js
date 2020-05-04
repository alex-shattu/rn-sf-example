import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Home from '~/containers/Home/Home';
import User from '~/containers/User/User';
import withTheme from '~/services/withTheme';

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route, theme }) => {
  const handleOpenDrawer = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  const handleChangeTheme = useCallback(() => {
    const onChangeTheme = route.params?.onChangeTheme ?? (() => {});
    onChangeTheme();
  }, [route.params]);

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitleAlign: Platform.select({ ios: 'center', android: 'left' }),
        headerStyle: {
          backgroundColor: theme.colors.background,
          // shadowOpacity: 0,
          // elevation: 0,
        },
        headerTitleStyle: {
          color: theme.colors.primary,
        },
        headerBackImage: Platform.select({
          android: () => <IconMC name={'arrow-left'} size={30} color={theme.colors.primary} />,
          ios: undefined,
        }),
        headerRight: () => (
          <TouchableOpacity onPress={handleChangeTheme} style={styles.headerRightIcon}>
            <IconMC name="theme-light-dark" size={30} color={theme.colors.primary} />
          </TouchableOpacity>
        ),
      }}
      headerMode={Platform.select({ android: 'screen', ios: 'float' })}>
      <Stack.Screen
        name="home"
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
        name="user"
        component={User}
        options={{
          headerTitle: 'User',
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

export default withTheme(HomeStack);
