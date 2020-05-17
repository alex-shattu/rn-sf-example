import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Slider } from 'react-native-elements';
import settingsActions from 'store/actions/settings';
import { settingsSelector } from 'store/selectors/settings';
import getScaledFontSize from 'services/getScaledFontSize';
import {
  MAX_ADDITIONAL_FONT_SIZE,
  MIN_ADDITIONAL_FONT_SIZE,
  STEP_ADDITIONAL_FONT_SIZE,
} from 'constants/sizes';
import styles from './styles';

export const Settings = ({ settings, setSettings }) => {
  const theme = useTheme();
  const [fontAddSize, setFontAddSize] = useState(settings.fontAddSize);

  const saveSettings = useCallback(() => {
    setSettings({ fontAddSize });
  }, [fontAddSize, setSettings]);

  return (
    <View style={[styles.container, { padding: 16 }]}>
      <Text>Text size:</Text>
      <Slider
        thumbTintColor={theme.colors.primary}
        minimumValue={MIN_ADDITIONAL_FONT_SIZE}
        maximumValue={MAX_ADDITIONAL_FONT_SIZE}
        step={STEP_ADDITIONAL_FONT_SIZE}
        value={settings.fontAddSize}
        onValueChange={setFontAddSize}
      />
      <Text style={{ fontSize: getScaledFontSize(18, fontAddSize) }}>Title</Text>
    </View>
  );
};

Settings.propTypes = {};

const mapStateToProps = state => ({
  settings: settingsSelector(state),
});

const { setSettings } = settingsActions;

const mapDispatchToProps = {
  setSettings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
