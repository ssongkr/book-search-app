import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import BookSearchView from '../containers/BookSearchView';
import BookDetailView from '../containers/BookDetailView';

const Navigator = createStackNavigator({
    BookSearch: { screen: BookSearchView },
    BookDetail: { screen: BookDetailView }}, 
    { navigationOptions: { header: null }} 
);

Navigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible: tabBarVisible,
    };
}

export default class BookNavigator extends Component {
    render() {
        return <Navigator />
    }
}