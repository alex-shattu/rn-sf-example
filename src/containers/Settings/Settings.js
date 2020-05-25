/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import settingsActions from 'store/actions/settings';
import settingsSelectors from 'store/selectors/settings';
import SettingsUI from './SettingsUI';

export const Settings = props => {
  const [fontAddSize, setFontAddSize] = useState(props.settings.fontAddSize);
  const [darkTheme, setDarkTheme] = useState(props.settings.theme.dark);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) isFirstRun.current = false;
    else props.setSettings({ fontAddSize, darkTheme });
  }, [fontAddSize, darkTheme]);

  const debouncedSetFontAddSize = useCallback(_.debounce(value => setFontAddSize(value), 300), []);

  return (
    <SettingsUI
      setDarkTheme={setDarkTheme}
      darkTheme={darkTheme}
      fontAddSize={fontAddSize}
      debouncedSetFontAddSize={debouncedSetFontAddSize}
      theme={props.settings.theme}
    />
  );
};

Settings.propTypes = {};

const mapStateToProps = state => ({
  settings: settingsSelectors.getSettings(state),
});

const mapDispatchToProps = {
  setSettings: settingsActions.setSettings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
