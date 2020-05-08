import React, { Component } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import 'react-native-gesture-handler'; // needed for react-navigation/stack
import { ListItem, Icon } from 'react-native-elements';
import { oauth, net } from 'react-native-force';
import Toast from 'react-native-easy-toast';
import Preloader from '~/components/Preloader';
import styles from './styles';
import withTheme from '~/services/withTheme';

class Home extends Component {
  static navigationOptions = {
    title: 'Mobile SDK Sample App',
  };

  constructor(props) {
    super(props);
    this.toastRef = React.createRef();
    this.state = {
      data: [],
      isFetching: false,
      isRefreshing: false,
      isError: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    oauth.getAuthCredentials(
      () => this.fetchData({ isRefreshing: false }), // already logged in
      () => {
        oauth.authenticate(
          () => this.fetchData({ isRefreshing: false }),
          ([{ errorCode, message }] = [{}]) => this.setStateFailure({ errorCode, message }),
        );
      },
    );
  }

  componentDidUpdate(_, { isError: prevIsError }) {
    const { isError, errorMessage } = this.state;
    if (isError && !prevIsError) {
      this.toastRef.current.show(errorMessage, 3000);
    }
  }

  setStateSuccess = ({ data = [] }) =>
    this.setState(
      {
        data,
        isRefreshing: false,
        isFetching: false,
        isError: false,
      },
      () => {
        // console.table(data);
        console.log(data);
      },
    );

  setStateFailure = ({ errorCode, message }) =>
    this.setState(
      {
        errorMessage: `${errorCode}\n${message}`,
        isError: true,
        isRefreshing: false,
        isFetching: false,
      },
      () => console.log(`%c${errorCode}\n${message}`, 'color:red'),
    );

  fetchData = ({ isRefreshing }) => {
    this.setState(
      { isFetching: !isRefreshing, isRefreshing, isError: false, errorMessage: '' },
      () => {
        net.query(
          'SELECT Id, Name, Email FROM user WHERE isActive = true LIMIT 20',
          response => this.setStateSuccess({ data: response.records }),
          ([{ errorCode, message }] = [{}]) => this.setStateFailure({ errorCode, message }),
        );
        // net.describe(
        //   'User',
        //   response => {
        //     console.table(response.fields.map(({ name, label, type }) => ({ name, label, type })));
        //   },
        //   ([{ errorCode, message }] = [{}]) => this.setStateFailure({ errorCode, message }),
        // );
      },
    );
  };

  showUser = ({ Id: id }) => () => {
    const { navigation } = this.props;
    navigation.navigate('user', { id });
  };

  renderItem = ({ item }) => {
    const { theme } = this.props;
    return (
      <ListItem
        onPress={this.showUser(item)}
        title={item.Name}
        subtitle={item.Email}
        leftAvatar={() => <Icon name="account-circle" color={theme.colors.text} />}
        right={() => <Icon name="arrow-right" />}
        containerStyle={{
          backgroundColor: theme.colors.card,
        }}
        titleStyle={{ color: theme.colors.text }}
        subtitleStyle={{ color: theme.colors.text }}
        bottomDivider
      />
    );
  };

  onRefresh = () => this.fetchData({ isRefreshing: true });

  keyExtractor = ({ Id }) => Id;

  render() {
    const { isFetching, data, isRefreshing } = this.state;
    const { theme } = this.props;
    const refreshColors = [theme.colors.primary];
    const viewStyle = [styles.container, { backgroundColor: theme.colors.background }];

    return (
      <View style={viewStyle}>
        <FlatList
          refreshControl={
            <RefreshControl
              colors={refreshColors}
              refreshing={isRefreshing}
              onRefresh={this.onRefresh}
            />
          }
          style={styles.flatList}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <Preloader isFetching={isFetching} />
        <Toast
          ref={this.toastRef}
          position="center"
          style={styles.toast}
          defaultCloseDelay={1500}
        />
      </View>
    );
  }
}

export default withTheme(Home);
