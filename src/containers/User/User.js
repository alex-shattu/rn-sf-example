import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { RefreshControl, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import Preloader from 'components/Preloader';
import settingsSelectors from 'store/selectors/settings';
import userSelectors from 'store/selectors/user';
import userActions from 'store/actions/user';
import { usePreviousValue } from 'helpers/hooks';
import getScaledFontSize from 'services/getScaledFontSize';
import styles from './styles';

const User = props => {
  const prevIsError = usePreviousValue(props.isError);
  const toastRef = useRef(null);

  const refreshUser = useCallback(
    () => props.getUser({ id: props.route.params.id, isRefreshing: true }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.route.params.id],
  );

  const getUser = useCallback(
    () => props.getUser({ id: props.route.params.id, isRefreshing: false }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.route.params.id],
  );

  useEffect(() => {
    getUser();
  }, [getUser]);

  const theme = useTheme();

  useEffect(() => {
    if (!prevIsError && props.isError) {
      toastRef.current.show('Error');
    }
  }, [props.isError, prevIsError]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[theme.colors.primary]}
            refreshing={props.isRefreshing}
            onRefresh={refreshUser}
            progressBackgroundColor={theme.colors.background}
          />
        }
        style={styles.scrollView}>
        {Object.keys(props.user).map((key, index) => (
          <ListItem
            key={index}
            title={String(props.user[key])}
            subtitle={key}
            containerStyle={{
              backgroundColor: theme.colors.card,
            }}
            titleStyle={{ color: theme.colors.text }}
            subtitleStyle={{ color: theme.colors.text }}
          />
        ))}
        <Preloader isFetching={props.isFetching && !props.isRefreshing} />
      </ScrollView>
      <Toast
        ref={toastRef}
        position="center"
        textStyle={{
          color: theme.colors.background,
          fontSize: getScaledFontSize(16, props.fontAddSize),
        }}
        style={[styles.toast, { backgroundColor: theme.colors.text }]}
        defaultCloseDelay={1500}
      />
    </View>
  );
};

User.propTypes = {
  id: PropTypes.string,
};

const mapStateToProps = (state, { route: { params } }) => ({
  fontAddSize: settingsSelectors.getFontAddSize(state),
  user: userSelectors.getData(state, params), // (state, { id })
  isFetching: userSelectors.getIsFetching(state),
  isRefreshing: userSelectors.getIsRefreshing(state),
  isError: userSelectors.getIsError(state),
});

const mapDispatchToProps = {
  getUser: userActions.getUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
