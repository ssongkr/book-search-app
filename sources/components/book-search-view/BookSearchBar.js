import React from 'react';
import { 
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import colors from '../../assets/colors';

const BookSearchBar = (props) => {

    const { fetchBooks, setKeyword } = props;

    const _onChangeText = (text) => {
        setKeyword(text); 
    }

    const _onSubmitEditing = () => {
        fetchBooks(props.bookState.keyword, 1);
    }

    return (				
        <View style={styles.container}>
            <TextInput 
                style={styles.searchBox}
                autoFocus={true}
                underlineColorAndroid='transparent'
                placeholder='어떤 책을 찾고 계신가요?' 
                onChangeText={_onChangeText}
                onSubmitEditing={_onSubmitEditing} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		height: 72,
		backgroundColor: colors.toolbar,
		elevation: 3,
	},
	searchBox: {
        height: 48,
        alignSelf: 'stretch',
		backgroundColor: 'white',
		elevation: 3,
		marginTop: 12,
		marginHorizontal: 8,
		paddingHorizontal: 24,
		borderRadius: 2,
		fontSize: 14,
	},
})

export default BookSearchBar;