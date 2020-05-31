/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import SettingsUI from './SettingsUI';
import { useTheme } from '@react-navigation/native';

export const Settings = () => {
  const settings = {
    fontAddSize: 1,
    theme: {
      dark: false,
    },
  };
  const [fontAddSize, setFontAddSize] = useState(settings.fontAddSize);
  const [darkTheme, setDarkTheme] = useState(settings.theme.dark);
  const isFirstRun = useRef(true);
  const theme = useTheme();
  const setSettings = useCallback(() => {}, []);

  useEffect(() => {
    if (isFirstRun.current) isFirstRun.current = false;
    else setSettings({ fontAddSize, darkTheme });
  }, [fontAddSize, darkTheme]);

  const debouncedSetFontAddSize = useCallback(_.debounce(value => setFontAddSize(value), 300), []);

  return (
    <SettingsUI
      setDarkTheme={setDarkTheme}
      darkTheme={darkTheme}
      fontAddSize={fontAddSize}
      debouncedSetFontAddSize={debouncedSetFontAddSize}
      theme={theme}
    />
  );
};

// Settings.propTypes = {};

export default Settings;
