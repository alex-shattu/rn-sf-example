import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch } from 'react-native';
import { Slider } from 'react-native-elements';
import {
  MAX_ADDITIONAL_FONT_SIZE,
  MIN_ADDITIONAL_FONT_SIZE,
  STEP_ADDITIONAL_FONT_SIZE,
} from 'constants/sizes';
import { useThemedStyles } from 'helpers/hooks';
import themedStyles from './themedStyles';

export const Settings = props => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.groupTitle}>Appearance</Text>
      <View style={styles.cell}>
        <View style={styles.row}>
          <Text style={styles.switchLabel}>Dark theme</Text>
          <View>
            <Switch
              trackColor={{
                false: '#ADADAD',
                true: props.theme.colors.light,
              }}
              thumbColor={props.darkTheme ? props.theme.colors.dark : '#FFF'}
              ios_backgroundColor={props.theme.colors.background}
              onValueChange={props.setDarkTheme}
              value={props.darkTheme}
            />
          </View>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={styles.column}>
          <View style={styles.sliderLabelWrapper}>
            <Text style={styles.sliderLabel}>Text size</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderTextLeft}>A</Text>
            <Slider
              thumbTintColor={props.theme.colors.dark}
              // thumbStyle={{ backgroundColor: props.theme.colors.dark }}
              trackStyle={styles.trackStyle}
              minimumValue={MIN_ADDITIONAL_FONT_SIZE}
              maximumValue={MAX_ADDITIONAL_FONT_SIZE}
              step={STEP_ADDITIONAL_FONT_SIZE}
              value={props.fontAddSize}
              onValueChange={props.debouncedSetFontAddSize}
              minimumTrackTintColor={props.theme.colors.dark}
              maximumTrackTintColor={props.theme.colors.dark}
              style={styles.sliderStyle}
            />
            <Text style={styles.sliderTextRight}>A</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Settings.propTypes = {};

export default Settings;
