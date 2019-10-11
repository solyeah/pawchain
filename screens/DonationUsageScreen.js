import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	StyleSheet,
	ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class DonationUsageScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerRight      : <View style={{ padding: 5, paddingLeft: 15 }} />,
			title            : '기부금 사용 내역',
			headerTitleStyle : {
				textAlign : 'center',
				flex      : 1,
				fontSize  : 22
			}
		};
	};
	refreshData = () => {
		//
	};
	render() {
		return (
			<View>
				<View
					style={{
						borderBottomColor : 'lightgray',
						borderBottomWidth : 1
					}}
				>
					<Image
						style={styles.profile}
						source={{
							uri :
								'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg'
						}}
					/>
					<Text style={{ textAlign: 'center', fontSize: 25 }}>
						경표 보호소
					</Text>
					<Text
						style={{
							textAlign    : 'center',
							fontSize     : 17,
							color        : 'darkgray',
							marginBottom : 18
						}}
					>
						happyshelter@happy.com
					</Text>
				</View>
				<View style={styles.container}>
					<View style={styles.range}>
						<Text style={styles.contents}>총 기부 받은 금액</Text>
					</View>
					<View style={styles.right}>
						<Text style={styles.contents}>1,689,200원</Text>
					</View>
				</View>
				<View style={styles.container}>
					<Text style={styles.contents}>수용하는 동물 수</Text>
					<View style={styles.right}>
						<Text style={styles.contents}>43 / 50마리</Text>
					</View>
				</View>
				<View
					style={{
						borderBottomColor : 'lightgray',
						borderBottomWidth : 1,
						marginTop         : 18
					}}
				/>
				<ScrollView style={styles.scrollView}>
					<View>
						<Text
							style={{
								textAlign : 'center',
								fontSize  : 17,
								color     : 'lightgrey',
								margin    : 12
							}}
						>
							2019년 9월
						</Text>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							예솔 동물병원 (2019년 9월 10일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>120,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							재우네 펫 샾 (2019년 9월 3일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>76,200원</Text>
						</View>
					</View>
					<View>
						<Text
							style={{
								textAlign : 'center',
								fontSize  : 17,
								color     : 'lightgrey',
								margin    : 8
							}}
						>
							2019년 8월
						</Text>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							Spa for Pet (2019년 8월 31일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>100,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							세미나 참가비 (2019년 8월 27일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>55,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							경표네 애견 살롱 (2019년 8월 25일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>100,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							직원 상여금 (2019년 8월 27일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>200,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							직원 상여금 (2019년 8월 27일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>200,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							월튼 펫 마켓 (2019년 8월 25일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>170,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							은수네 사료 (2019년 8월 23일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>75,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							재우네 펫샵 (2019년 8월 20일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>60,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							보호소 운영기금 (2019년 8월 20일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>100,000원</Text>
						</View>
					</View>
					<View style={styles.container2}>
						<Text style={styles.contents2}>
							은하수 펫 스파 (2019년 8월 17일)
						</Text>
						<View style={styles.right}>
							<Text style={styles.contents2}>70,000원</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container  : {
		width          : '100%',
		// height: '100%',
		flexDirection  : 'row',
		alignItems     : 'center',
		justifyContent : 'space-between',
		padding        : 5,
		marginTop      : 15
	},
	container2 : {
		width          : '100%',
		flexDirection  : 'row',
		alignItems     : 'center',
		justifyContent : 'space-between',
		margin         : 3
	},
	profile    : {
		width        : 120,
		height       : 120,
		borderRadius : 60,
		marginTop    : 35,
		marginBottom : 15,
		margin       : 6,
		alignSelf    : 'center'
	},
	contents   : {
		paddingLeft : 15,
		color       : 'tomato',
		fontSize    : 23
	},
	contents2  : {
		paddingLeft : 15,
		color       : 'black',
		fontSize    : 17,
		flexWrap    : 'wrap'
	},
	right      : {
		paddingRight : 15
	},
	scrollView : {
		height : 500
		// width: '100%'
	}
});
