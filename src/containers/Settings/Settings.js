import React, { useCallback, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Slider } from 'react-native-elements';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import settingsActions from 'store/actions/settings';
import { settingsSelector } from 'store/selectors/settings';
import getScaledFontSize from 'services/getScaledFontSize';
import {
  MAX_ADDITIONAL_FONT_SIZE,
  MIN_ADDITIONAL_FONT_SIZE,
  STEP_ADDITIONAL_FONT_SIZE,
} from 'constants/sizes';
import styles from './styles';

export const Settings = ({ settings, setSettings, navigation }) => {
  const theme = useTheme();
  const [fontAddSize, setFontAddSize] = useState(settings.fontAddSize);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setSettings({ fontAddSize });
            navigation.goBack();
          }}
          style={styles.headerLeftIcon}>
          {Platform.select({
            ios: <Text style={[styles.headerRightIOS, { color: theme.colors.primary }]}>Save</Text>,
            android: <IconMI name="check" size={30} color={theme.colors.primary} />,
          })}
        </TouchableOpacity>
      ),
    });
  }, [fontAddSize, navigation, setSettings, theme.colors.primary]);

  const debouncedSetFontAddSize = useCallback(_.debounce(value => setFontAddSize(value), 300), []);

  return (
    <View style={[styles.container, { padding: 16 }]}>
      <Text>Text size:</Text>
      <Slider
        thumbTintColor={theme.colors.primary}
        minimumValue={MIN_ADDITIONAL_FONT_SIZE}
        maximumValue={MAX_ADDITIONAL_FONT_SIZE}
        step={STEP_ADDITIONAL_FONT_SIZE}
        value={fontAddSize}
        onValueChange={debouncedSetFontAddSize}
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
