import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '~/store/createStore';
import { Main } from 'containers/Main/Main';

const { store, persistor } = createStore();
store.subscribe(() => {});

const App = () => {
  // componentDidMount() {
  //   const { dark } = this.state;
  //   const theme = getTheme(dark);
  //   StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content');
  //   StatusBar.setBackgroundColor(theme.colors.background, true);
  // }

  // handleChangeTheme = () =>
  //   this.setState(({ dark: _dark }) => {
  //     const dark = !_dark;
  //     const theme = getTheme(dark);
  //     StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content');
  //     StatusBar.setBackgroundColor(theme.colors.background, true);
  //     return { dark, theme };
  //   });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
