import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Platform, TouchableOpacity, Switch } from 'react-native';
// import Slider from '@react-native-community/slider';
import { Slider, Divider } from 'react-native-elements';
import { iOSColors } from 'react-native-typography';
import {
  MAX_ADDITIONAL_FONT_SIZE,
  MIN_ADDITIONAL_FONT_SIZE,
  STEP_ADDITIONAL_FONT_SIZE,
} from 'constants/sizes';
// import styles from './styles';
import { useThemedStyles } from 'helpers/hooks';
import themedStyles from './themedStyles';

export const Settings = props => {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.groupTitle}>Appearance</Text>
      <View style={styles.group}>
        <View style={styles.cell}>
          <View style={styles.row}>
            <Text style={styles.switchLabel}>Dark theme</Text>
            <Switch
              thumbColor={iOSColors.white}
              ios_backgroundColor={props.theme.colors.background}
              onValueChange={props.setDarkTheme}
              value={props.darkTheme}
            />
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.cell}>
          <View style={styles.column}>
            <View style={styles.sliderLabelWrapper}>
              <Text style={styles.sliderLabel}>Text size</Text>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderTextLeft}>A</Text>
              <Slider
                thumbTintColor={iOSColors.white}
                thumbStyle={styles.sliderThumbStyle}
                trackStyle={styles.sliderTrackStyle}
                minimumValue={MIN_ADDITIONAL_FONT_SIZE}
                maximumValue={MAX_ADDITIONAL_FONT_SIZE}
                step={STEP_ADDITIONAL_FONT_SIZE}
                value={props.fontAddSize}
                onValueChange={props.debouncedSetFontAddSize}
                minimumTrackTintColor={iOSColors.blue}
                maximumTrackTintColor={iOSColors.blue}
                style={styles.sliderStyle}
              />
              <Text style={styles.sliderTextRight}>A</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

Settings.propTypes = {
  setDarkTheme: PropTypes.func,
  debouncedSetFontAddSize: PropTypes.func,
  fontAddSize: PropTypes.number,
  darkTheme: PropTypes.bool,
  theme: PropTypes.object,
};

export default memo(Settings);
