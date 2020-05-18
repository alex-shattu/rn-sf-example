import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from 'navigation/HomeStack';
import DrawerContent from 'components/DrawerContent';
import getTheme from 'services/getTheme';
import Initial from 'containers/Initial';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export const Main = () => {
  const theme = getTheme();
  return (
    <NavigationContainer theme={theme}>
      {/* <Stack.Navigator
        initialRouteName="init"
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="init" component={Initial} />
        <Stack.Screen
          name="main"
          component={() => ( */}
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="drawer">
        <Drawer.Screen
          // initialParams={{ onChangeTheme: this.handleChangeTheme }}
          name="drawer"
          component={HomeStack}
        />
      </Drawer.Navigator>
      {/* )} */}
      {/* /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

Main.propTypes = {
  // prop: PropTypes
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
