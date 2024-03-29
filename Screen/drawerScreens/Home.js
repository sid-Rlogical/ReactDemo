import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';

//import {createStackNavigator} from '@react-navigation/stack';
//import {NavigationContainer} from '@react-navigation/native';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      search: '',
    };
  }

  componentDidMount() {
    this.makeUserRequest();
  }

  renderSeparator = () => {
    return <View style={StyleSheets.separatorStyle} />;
  };

  renderFooter = () => {
    if (!this.state.isLoading) {
      return null;
    }

    return (
      <View style={StyleSheets.FooterStyle}>
        <ActivityIndicator animatingSize="large" />
      </View>
    );
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type here..."
        lightTheme
        round
        containerStyle={{backgroundColor: '#FFFFFF'}}
        onChangeText={(text) => this.setState({search: text})}
        value={this.state.search}
      />
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.makeUserRequest();
      },
    );
  };

  capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  renderItems = (item) => {
    const name =
      this.capFirstLetter(item.name.title) +
      '.' +
      this.capFirstLetter(item.name.first) +
      this.capFirstLetter(item.name.last);

    return (
      <ListItem
        roundAvatar
        title={name}
        subtitle={item.email}
        leftAvatar={{
          source: {uri: item.picture.large},
          showAccessory: false,
          height: 50,
          width: 50,
          borderRadius: 25,
          borderColor: '#000000',
          borderWidth: 2,
        }}
        onPress={() => {
          this.props.navigation.navigate('Details', {
            name: item.name.first,
            email: item.email,
            image: item.picture.large,
          });
        }}
      />
    );
  };

  onPressItem = (item) => {
    console.log('on press email with item ' + item.email);
    this.props.navigation.navigate('Details', {
      name: item,
    });
  };

  handleRefresh = () => {
    this.state(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.makeUserRequest();
      },
    );
  };

  makeUserRequest() {
    const {page, seed} = this.state;
    const url =
      'https://randomuser.me/api/?seed=${seed}&page=${page}&results=10';
    this.setState({isLoading: true});
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          isLoading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({error, isLoading: false});
      });
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.renderItems(item)}
          keyExtractor={(item) => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          //onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
        />
      </View>
    );
  }
}

const StyleSheets = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  TextStyleSheet: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    //overflow: 'hidden',
    //borderWidth: 3,
    //borderColor: 'red',
  },

  separatorStyle: {
    height: 0,
    width: '86%',
    backgroundColor: '#FFFFFF',
    marginLeft: '20%',
  },
  FooterStyle: {
    paddingVertical: 20,
    borderTopWidth: 1,
    backgroundColor: '#CED0CE',
  },
  SearchBarStyle: {
    backgroundColor: '#003f5c',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
