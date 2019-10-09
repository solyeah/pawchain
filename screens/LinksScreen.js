/*#F75356*/
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DetailScreen from './DetailScreen';
import { Ionicons } from '@expo/vector-icons';

export default function LinksScreen() {
	return <DetailScreen />;
}

LinksScreen.navigationOptions = ({ navigation }) => {
	return {
		headerLeft : (
			<TouchableOpacity
				style={{ padding: 20, paddingRight: 15 }}
				onPress={() => {
					navigation.navigate('');
				}}
			>
				<Ionicons name={'ios-arrow-back'} size={35} color={'#F75356'} />
			</TouchableOpacity>
		),
		title      : 'Paw Chain'
	};
};
const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff'
	}
});
