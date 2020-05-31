import React, { useEffect, useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { RefreshControl, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import { ScrollView } from 'react-native-gesture-handler';
import Preloader from 'components/Preloader';
import { usePreviousValue } from 'helpers/hooks';
// import getScaledFontSize from 'services/getScaledFontSize';
import { useQuery } from '@apollo/react-hooks';
// import themedStyles from './themedStyles';
import { useTheme } from '@react-navigation/native';
import gql from 'graphql-tag';
import styles from './styles';

const fetchTypes = {
  FETCH: 'FETCH',
  REFETCH: 'REFETCH',
};

const User = props => {
  const theme = useTheme();
  const toastRef = useRef(null);
  // const styles = useThemedStyles(themedStyles);
  const [fetchType, setFetchType] = useState(fetchTypes.FETCH);

  const { loading, error, data = { user: [{}] }, refetch } = useQuery(
    gql`
      query GetUser($id: Int) {
        user(Id: $id) {
          Id
          Name
        }
      }
    `,
    { variables: { id: props.route.params.id }, notifyOnNetworkStatusChange: true },
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

  console.log(data);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[theme.colors.primary]}
            refreshing={loading && fetchType === fetchTypes.REFETCH}
            onRefresh={handleRefresh}
            progressBackgroundColor={theme.colors.background}
          />
        }
        style={styles.scrollView}>
        {Object.keys(data.user[0]).map((key, index) => (
          <ListItem
            key={index}
            title={String(data.user[0][key])}
            subtitle={key}
            containerStyle={{
              backgroundColor: theme.colors.card,
            }}
            titleStyle={{ color: theme.colors.text }}
            subtitleStyle={{ color: theme.colors.text }}
          />
        ))}
      </ScrollView>
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

User.propTypes = {
  id: PropTypes.string,
};

export default User;
