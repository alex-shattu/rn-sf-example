import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from 'navigation/HomeStack';
import DrawerContent from 'components/DrawerContent';
import getTheme from 'services/getTheme';
import settingsSelectors from 'store/selectors/settings';

const Drawer = createDrawerNavigator();

const Main = ({ theme }) => {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="drawer">
        <Drawer.Screen name="drawer" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

Main.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = state => ({
  // darkTheme: settingsSelectors.getDarkTheme(state),
  // scaleFonts: settingsSelectors.getScaleFonts(state),
  theme: settingsSelectors.getTheme(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
