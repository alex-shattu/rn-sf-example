import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '~/navigation/HomeStack';
import DrawerContent from '~/components/DrawerContent';
import getTheme from '~/services/getTheme';

const Drawer = createDrawerNavigator();

export const Main = () => {
  const theme = getTheme();
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="drawer">
        <Drawer.Screen
          initialParams={{ onChangeTheme: this.handleChangeTheme }}
          name="drawer"
          component={HomeStack}
        />
      </Drawer.Navigator>
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
