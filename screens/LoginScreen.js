import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	Image,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	AsyncStorage
} from 'react-native';

import IconTextInput from '../components/IconTextInput';
import LoginButton from '../components/LoginButton';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput  : '',
			emailInput : ''
		};
	}

	login(email, name) {
		if (email == '1234' && name == '1234') {
			return this.props.navigation.navigate('Home');
		}
	}

	submitLogin = async (email, name) => {
		//AsyncStorage.Clear();
		// const data = await LoginButton(email, name);

		// if (data) {
		// 	console.log('-------data-------');
		// 	console.log(data);

		// 	await AsyncStorage.setItem('user', JSON.stringify(data));
		// 	return this.props.navigation.navigate('Home');
		// }

		this.login(email, name);
	};

	render() {
		return (
			<KeyboardAvoidingView
				style={{
					flex           : 1,
					flexDirection  : 'column',
					justifyContent : 'center'
				}}
				behavior="padding"
			>
				<View style={styles.container}>
					{/*<Text style={styles.title}>PAW CHAIN</Text>*/}
					<Image
						style={{
							width: 300,
							height: 300,
							resizeMode: 'contain'
						}}
						source={require('../assets/images/Logo.png')}
					/>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-person'}
						placeholder={'이름'}
						onChange={(text) => this.setState({ nameInput: text })}
					/>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-mail'}
						placeholder={'이메일'}
						onChange={(text) => this.setState({ emailInput: text })}
					/>
					<LoginButton
						style={{ marginTop: 10 }}
						title={'회원가입 / 로그인'}
						onPress={() => {
							console.log('회원가입/로그인 pressed');
							this.submitLogin(
								this.state.emailInput,
								this.state.nameInput
							);
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
const styles = StyleSheet.create({
	title     : {
		fontSize   : 30,
		color      : 'tomato',
		marginTop  : -20,
		fontWeight : '400'
	},
	container : {
		alignSelf     : 'center',
		flexDirection : 'column',
		padding       : 30,
		alignItems    : 'center'
	},
	textInput : {
		width       : 300,
		height      : 40,
		borderColor : 'black',
		borderWidth : 0.3
	}
});
