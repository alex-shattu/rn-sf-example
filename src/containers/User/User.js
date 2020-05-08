import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RefreshControl, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { net } from 'react-native-force';
import Toast from 'react-native-easy-toast';
import Preloader from '~/components/Preloader';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import withTheme from '~/services/withTheme';

class User extends Component {
  constructor(props) {
    super(props);
    this.toastRef = React.createRef();
    this.state = {
      user: {},
      isFetching: false,
      isError: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.route.params;
    this._fetchData({ id, isRefreshing: false });
  }

  componentDidUpdate(_, { isError: prevIsError }) {
    const { isError, errorMessage } = this.state;
    if (isError && !prevIsError) {
      this.toastRef.current.show(errorMessage, 3000);
    }
  }

  _setStateSuccess = ({ user = {} }) => {
    this.setState(
      {
        user,
        isRefreshing: false,
        isFetching: false,
        isError: false,
      },
      () => console.log(`%c${JSON.stringify(user, null, 2)}`, 'color:yellow'),
    );
  };

  _setStateFailure = ({ errorCode, message }) => {
    this.setState(
      {
        errorMessage: `${errorCode}\n${message}`,
        isError: true,
        isRefreshing: false,
        isFetching: false,
      },
      () => console.log(`%c${errorCode}\n${message}`, 'color:red'),
    );
  };

  _fetchData = ({ id, isRefreshing }) => {
    this.setState({ isFetching: !isRefreshing, isRefreshing, isError: false }, () =>
      net.query(
        `SELECT Id, Name, Email, UserType, CountryCode, CommunityNickname, isActive FROM user WHERE Id = '${id}'`,
        response => this._setStateSuccess({ user: response.records[0] }),
        ([{ errorCode, message }] = [{}]) => this._setStateFailure({ errorCode, message }),
      ),
    );
  };

  _onRefresh = () => {
    const { id } = this.props.route.params;
    this._fetchData({ id, isRefreshing: true });
  };

  render() {
    const { isFetching, user, isRefreshing } = this.state;
    // prettier-ignore
    const { theme } = this.props;
    delete user.attributes;
    const refreshColors = [theme.colors.primary];
    const viewStyle = [styles.container, { backgroundColor: theme.colors.background }];

    return (
      <View style={viewStyle}>
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={refreshColors}
              refreshing={isRefreshing}
              onRefresh={this._onRefresh}
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
          ref={this.toastRef}
          position="center"
          style={[styles.toast, { backgroundColor: theme.colors.text }]}
          textStyle={{ color: theme.colors.background }}
          defaultCloseDelay={1500}
        />
      </View>
    );
  }
}

User.propTypes = {
  id: PropTypes.string,
};

export default withTheme(User);
