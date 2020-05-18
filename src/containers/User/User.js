import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RefreshControl, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import Preloader from 'components/Preloader';
import { ScrollView } from 'react-native-gesture-handler';
import { fontAddSizeSelector } from 'store/selectors/settings';
import { userSelector } from 'store/selectors/user';
import userActions from 'store/actions/user';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';

const User = ({ isFetching, user, isRefreshing, getUser, route }) => {
  useEffect(() => {
    const { id } = route.params;
    getUser({ id });
  }, [getUser, route.params]);

  const theme = useTheme();
  const refreshColors = [theme.colors.primary];
  const viewStyle = [styles.container, { backgroundColor: theme.colors.background }];
  const progressBackgroundColor = theme.colors.background;

  return (
    <View style={viewStyle}>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={refreshColors}
            refreshing={isRefreshing}
            onRefresh={() => {}}
            progressBackgroundColor={progressBackgroundColor}
          />
        }
        style={styles.scrollView}>
        {Object.keys(user).map((key, index) => (
          <ListItem
            key={index}
            title={String(user[key])}
            subtitle={key}
            containerStyle={{
              backgroundColor: theme.colors.card,
            }}
            titleStyle={{ color: theme.colors.text }}
            subtitleStyle={{ color: theme.colors.text }}
          />
        ))}
        <Preloader isFetching={isFetching} />
      </ScrollView>
      <Toast
        // ref={this.toastRef}
        position="center"
        style={[styles.toast, { backgroundColor: theme.colors.text }]}
        textStyle={{ color: theme.colors.background }}
        defaultCloseDelay={1500}
      />
    </View>
  );
};

User.propTypes = {
  id: PropTypes.string,
};

const mapStateToProps = (state, { route: { params } }) => ({
  fontAddSize: fontAddSizeSelector(state),
  user: userSelector(state, params), // (state, { id })
});

const { getUser } = userActions;

const mapDispatchToProps = {
  getUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
