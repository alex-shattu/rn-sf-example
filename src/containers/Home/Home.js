import React, { useEffect, useRef, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { oauth } from 'react-native-force';
import Toast from 'react-native-easy-toast';
import { useTheme } from '@react-navigation/native';
import Preloader from 'components/Preloader';
import styles from './styles';
import { connect } from 'react-redux';
import { fontAddSizeSelector } from 'store/selectors/settings';
import { usersSelector } from 'store/selectors/users';
import usersActions from 'store/actions/users';
import Item from './Item';

const Home = ({ getUsers, isRefreshing, isFetching, data, navigation, fontAddSize }) => {
  useEffect(() => {
    oauth.getAuthCredentials(
      () => fetchData({ isRefreshing: false }), // already logged in
      () => {
        oauth.authenticate(
          () => fetchData({ isRefreshing: false }),
          ([{ errorCode, message }] = [{}]) => {
            console.log({ errorCode, message });
          },
        );
      },
    );
  }, [fetchData]);

  const ref = useRef(null);

  const fetchData = useCallback(() => {
    getUsers();
  }, [getUsers]);

  const showUser = useCallback(
    ({ Id: id }) => {
      navigation.navigate('user', { id });
    },
    [navigation],
  );

  const theme = useTheme();

  const refreshColors = [theme.colors.primary];
  const viewStyle = [styles.container, { backgroundColor: theme.colors.background }];
  const progressBackgroundColor = theme.colors.background;

  return (
    <View style={viewStyle}>
      <FlatList
        refreshControl={
          <RefreshControl
            colors={refreshColors}
            refreshing={isRefreshing}
            onRefresh={() => fetchData({ isRefreshing: true })}
            progressBackgroundColor={progressBackgroundColor}
          />
        }
        style={styles.flatList}
        data={data}
        renderItem={props => <Item {...props} onClick={showUser} fontAddSize={fontAddSize} />}
        keyExtractor={({ Id }) => Id}
      />
      <Preloader isFetching={isFetching} />
      <Toast ref={ref} position="center" style={styles.toast} defaultCloseDelay={1500} />
    </View>
  );
};

const mapStateToProps = state => ({
  fontAddSize: fontAddSizeSelector(state),
  data: usersSelector(state),
});

const { getUsers } = usersActions;

const mapDispatchToProps = {
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
