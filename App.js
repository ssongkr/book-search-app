import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import store from './sources/store';
import { Provider } from 'react-redux';
import BookNavigator from './sources/navigations/BookSearchNavi'

export default class App extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <BookNavigator/>
      </Provider>
    );
  }
}