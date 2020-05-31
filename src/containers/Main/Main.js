import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from 'navigation/HomeStack';
import DrawerContent from 'components/DrawerContent';
import { View } from 'react-native';
import getTheme from 'services/getTheme';
import { oauth } from 'react-native-force';
// import storeActions from 'store/actions/store'
// import settingsSelectors from 'store/selectors/settings';

const Drawer = createDrawerNavigator();

const Main = ({ clearStore }) => {
  const theme = getTheme({ darkTheme: false, scaleFonts: true });

  // useEffect(() => {
  //   oauth.getAuthCredentials(
  //     data => {
  //       // props.updateProfile(data);
  //       // fetchData();
  //       console.log(data);
  //     },
  //     () => {
  //       oauth.authenticate(
  //         data => {
  //           // props.updateProfile(data);
  //           // fetchData();
  //         },
  //         ([{ errorCode, message }] = [{}]) => {
  //           console.log({ errorCode, message });
  //         },
  //       );
  //     },
  //   );
  // }, []);

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} clearStore={clearStore} />}
        initialRouteName="drawer">
        <Drawer.Screen name="drawer" component={HomeStack} />
        {/* <Drawer.Screen name="drawer" component={() => <View />} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

Main.propTypes = {
  theme: PropTypes.object,
};

// const mapStateToProps = state => ({
//   // darkTheme: settingsSelectors.getDarkTheme(state),
//   // scaleFonts: settingsSelectors.getScaleFonts(state),
//   theme: settingsSelectors.getTheme(state),
// });

// const mapDispatchToProps = {
//   clearStore: storeActions.clearStore,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Main);

export default Main;
