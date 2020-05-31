/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useCallback, useState } from 'react';
// import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl, ActivityIndicator, Platform } from 'react-native';
import Toast from 'react-native-easy-toast';
import { useQuery } from '@apollo/react-hooks';
import { useTheme } from '@react-navigation/native';
import gql from 'graphql-tag';

import Divider from 'components/Divider';
import Preloader from 'components/Preloader';
import routes from 'constants/routes';
import { usePreviousValue, useDebouncedFn, useThemedStyles } from 'helpers/hooks';
import themedStyles from './themedStyles';
import Item from './Item';

const fetchTypes = {
  FETCH: 'FETCH',
  REFETCH: 'REFETCH',
  FETCH_MORE: 'FETCH_MORE',
};

const Home = props => {
  const theme = useTheme();
  const toastRef = useRef(null);
  const styles = useThemedStyles(themedStyles);
  const canFetchMore = false;
  const [fetchType, setFetchType] = useState(fetchTypes.FETCH);

  const { loading, error, data = { user: [] }, refetch, fetchMore } = useQuery(
    gql`
      query GetUsers($offset: Int) {
        user(Limit: 10, Offset: $offset) {
          Id
          Name
        }
      }
    `,
    { variables: { offset: 0 }, notifyOnNetworkStatusChange: true },
  );

  const prevError = usePreviousValue(error);
  const prevLoading = usePreviousValue(loading);

  useEffect(() => {
    if (!loading && prevLoading) {
      setFetchType(null);
    }
  }, [loading, prevLoading]);

  useEffect(() => {
    if (!prevError && error) {
      toastRef.current?.show('Error');
    }
  }, [prevError, error]);

  const handleRefresh = useCallback(() => {
    setFetchType(fetchTypes.REFETCH);
    refetch();
  }, [refetch]);

  const showUser = useCallback(({ Id: id }) => props.navigation.navigate(routes.USER, { id }), []);
  const handleFetchMore = useDebouncedFn(
    () => {
      setFetchType(fetchTypes.FETCH_MORE);
      fetchMore({
        variables: {
          offset: data.user.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            user: [...prev.user, ...fetchMoreResult.user],
          };
        },
      });
    },
    1000,
    {
      leading: true,
      trailing: false,
    },
    [data.user.length],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => (
          <Divider
            color={theme.colors.separator}
            offsetLeft={16}
            offsetColor={theme.colors.card}
            height={1}
          />
        )}
        refreshControl={
          <RefreshControl
            colors={Platform.select({
              android: [theme.colors.primary],
              ios: [theme.colors.text],
            })}
            // tintColor={Platform.select({
            //   android: theme.colors.primary,
            //   ios: theme.colors.text,
            // })}
            refreshing={loading && fetchType === fetchTypes.REFETCH}
            onRefresh={handleRefresh}
            progressBackgroundColor={theme.colors.background}
          />
        }
        style={styles.flatList}
        data={data.user}
        renderItem={({ item }) => <Item item={item} onClick={showUser} styles={styles} />}
        keyExtractor={({ Id }) => Id}
        ListHeaderComponent={() => null}
        ListHeaderComponentStyle={data.user.length > 0 && styles.listHeaderComponent}
        ListFooterComponent={() =>
          canFetchMore && data.user.length > 0 ? (
            <ActivityIndicator
              style={styles.bottomActivity}
              color={Platform.OS === 'android' && theme.colors.primary}
            />
          ) : null
        }
        ListFooterComponentStyle={data.user.length > 0 && styles.listFooterComponent}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.4}
        contentContainerStyle={styles.contentContainer}
      />
      <Preloader isFetching={loading && fetchType === fetchTypes.FETCH} />
      <Toast
        ref={toastRef}
        position="center"
        textStyle={styles.toastText}
        style={styles.toast}
        defaultCloseDelay={1500}
      />
    </View>
  );
};

// Home.propTypes = {
//   fontAddSize: PropTypes.number,
// };

export default Home;
