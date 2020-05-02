/*
 * Copyright (c) 2017-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './containers/Home/Home';
import User from './containers/User/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { SearchBar } from 'react-native-elements';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const getTheme = (dark = false) => {
  const initialTheme = dark ? DarkTheme : DefaultTheme;
  return {
    ...initialTheme,
    colors: {
      ...initialTheme.colors,
      primary: '#00a1e0',
    },
  };
};

class App extends Component {
  state = {
    dark: false,
    theme: getTheme(),
  };

  handleChangeTheme = () =>
    this.setState(({ dark }) => {
      return { dark: !dark, theme: getTheme(!dark) };
    });

  render() {
    const { theme } = this.state;
    console.log('theme', theme);
    const commonHeader = {
      headerTitleAlign: Platform.select({ ios: 'center', android: 'left' }),
      headerStyle: {
        backgroundColor: theme.colors.background,
        // shadowOpacity: 0,
        // elevation: 0,
      },
      headerTitleStyle: {
        color: theme.colors.primary,
      },
      headerBackImage: () => (
        <Icon
          name={Platform.select({ ios: 'chevron-left', android: 'arrow-left' })}
          size={30}
          color={theme.colors.primary}
        />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={this.handleChangeTheme} style={styles.headerRightIcon}>
          <Icon name="theme-light-dark" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
      ),
    };

    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="home"
          headerMode={Platform.select({ android: 'screen', ios: 'float' })}>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              ...commonHeader,
              headerTitle: 'Home',
              // header: () => {
              //   return (
              //     <SearchBar
              //       platform="android"
              //       round={false}
              //       containerStyle={{
              //         padding: 0,
              //         backgroundColor: theme.colors.background,
              //       }}
              //       inputContainerStyle={{
              //         backgroundColor: 'transparent',
              //         borderWidth: 0,
              //       }}
              //       inputStyle={{
              //         color: theme.colors.primary,
              //         backgroundColor: theme.colors.background,
              //       }}
              //       value={search}
              //       onChangeText={this.handleChangeSearch}
              //       placeholder="Search..."
              //       searchIcon={props => (
              //         <Icon name="magnify" size={30} color={theme.colors.primary} {...props} />
              //       )}
              //       cancelIcon={props => (
              //         <Icon name="magnify" size={30} color={theme.colors.primary} {...props} />
              //       )}
              //     />
              //   );
              // },
            }}
          />
          <Stack.Screen
            name="user"
            component={User}
            options={{
              ...commonHeader,
              headerTitle: 'User',
              headerBackTitle: Platform.select({ ios: 'Home' }),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerRightIcon: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'center',
  },
});

export default App;
