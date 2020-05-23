/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl, ActivityIndicator, Platform } from 'react-native';
import { oauth } from 'react-native-force';
import Toast from 'react-native-easy-toast';
import Divider from 'components/Divider';
import { connect } from 'react-redux';
import Preloader from 'components/Preloader';
import settingsSelectors from 'store/selectors/settings';
import usersSelectors from 'store/selectors/users';
import usersActions from 'store/actions/users';
import { usePreviousValue, useDebouncedFn, useThemedStyles } from 'helpers/hooks';
import { useSafeArea } from 'react-native-safe-area-context';
import Item from './Item';
import themedStyles from './themedStyles';

const Home = props => {
  const prevIsError = usePreviousValue(props.isError);
  const insets = useSafeArea();
  const ref = useRef(null);
  const styles = useThemedStyles(themedStyles);

  const fetchData = useCallback(
    () => props.fetchUsers({ isRefreshing: false, offset: props.data.length }),
    [props.data.length],
  );

  const refreshData = useCallback(() => props.fetchUsers({ isRefreshing: true, offset: 0 }), []);

  const showUser = useCallback(({ Id: id }) => props.navigation.navigate('user', { id }), []);
  const fetchDataMore = useDebouncedFn(
    () => {
      if (props.canFetchMore && !props.isFetching && props.data.length > 0) {
        fetchData();
      }
    },
    1000,
    {
      leading: true,
      trailing: false,
    },
    [props.isFetching, props.data, props.canFetchMore],
  );

  useEffect(() => {
    if (!prevIsError && props.isError) {
      ref.current?.show('Error');
    }
  }, [props.isError, prevIsError]);

  useEffect(() => {
    oauth.getAuthCredentials(
      () => fetchData(),
      () => {
        oauth.authenticate(
          () => fetchData(),
          ([{ errorCode, message }] = [{}]) => {
            console.log({ errorCode, message });
          },
        );
      },
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => (
          <Divider
            color={props.theme.colors.separator}
            offsetLeft={16}
            offsetColor={props.theme.colors.card}
            height={1}
          />
        )}
        refreshControl={
          <RefreshControl
            colors={Platform.select({
              android: [props.theme.colors.primary],
              ios: [props.theme.colors.text],
            })}
            // tintColor={Platform.select({
            //   android: props.theme.colors.primary,
            //   ios: props.theme.colors.text,
            // })}
            refreshing={props.isRefreshing}
            onRefresh={refreshData}
            progressBackgroundColor={props.theme.colors.background}
          />
        }
        style={styles.flatList}
        data={props.data}
        renderItem={({ item }) => <Item item={item} onClick={showUser} styles={styles} />}
        keyExtractor={({ Id }) => Id}
        ListHeaderComponent={() => null}
        ListHeaderComponentStyle={styles.listHeaderComponent}
        ListFooterComponent={() =>
          props.canFetchMore && props.data.length > 0 ? (
            <ActivityIndicator
              style={styles.bottomActivity}
              color={Platform.OS === 'android' && props.theme.colors.primary}
            />
          ) : null
        }
        ListFooterComponentStyle={styles.listFooterComponent}
        onEndReached={fetchDataMore}
        onEndReachedThreshold={0.4}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom }]}
      />
      <Preloader isFetching={props.isFetching && !props.isRefreshing && !props.isFetchingMore} />
      <Toast
        ref={ref}
        position="center"
        textStyle={styles.toast}
        style={[styles.toast, { backgroundColor: props.theme.colors.text }]}
        defaultCloseDelay={1500}
      />
    </View>
  );
};

Home.defaultProps = {
  data: [],
};

Home.propTypes = {
  fontAddSize: PropTypes.number,
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  isFetchingMore: PropTypes.bool,
  isError: PropTypes.bool,
};

const mapStateToProps = state => ({
  fontAddSize: settingsSelectors.getFontAddSize(state),
  data: usersSelectors.getData(state),
  isFetching: usersSelectors.getIsFetching(state),
  isRefreshing: usersSelectors.getIsRefreshing(state),
  isFetchingMore: usersSelectors.getIsFetchingMore(state),
  isError: usersSelectors.getIsError(state),
  canFetchMore: usersSelectors.getCanFetchMore(state),
  theme: settingsSelectors.getTheme(state),
});

const mapDispatchToProps = {
  fetchUsers: usersActions.fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
