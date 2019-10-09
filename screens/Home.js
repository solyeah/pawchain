import React, { Component } from 'react';
import {
	Text,
	View,
	Platform,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import HomeCell from '../components/HomeCell';
import { abandonmentPublicSrvc } from '../components/Service';

let serviceKey =
	'DrBCc6VIxYHNvgp3uEwtWG3WiZ3QdLS5khEl6Yltx3Kff0kbfNGPYODcrydKDEgNEMDDCEVyAJBv0hOkam5jMg%3D%3D';
let bgnde = '20190101'; //유기날짜 (검색 시작일) (YYYYMMDD)
let endde = '20190930'; //유기날짜 (검색 종료일) (YYYYMMDD)
let upkind = '41700'; // 축종코드 - 개 : 417000 - 고양이 : 422400 - 기타 : 429900
let kind = null; //품종코드 (품종 조회 OPEN API 참조)
let upr_ce = null; //시도코드 (시도 조회 OPEN API 참조)
let org_cd = null; //시군구코드 (시군구 조회 OPEN API 참조)
let care_reg_no = null; //보호소번호 (보호소 조회 OPEN API 참조)
let state = 'notice'; //상태 - 전체 : null(빈값) - 공고중 : notice - 보호중 : protect
let pageNo = '1'; //페이지 번호
let numOfRows = '10'; //페이지당 보여줄 개수
let neuter_yn = 'Y'; //중성화여부
const mockData = [
	{
		number       : 1,
		shelterName  : '행복보호소',
		shelterImage :
			'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg',
		email        : 'happyshelter@happy.com',
		donation     : 111111,
		name         : '누렁이',
		age          : '3',
		abandonDate  : '2019.01.01',
		likes        : '100',
		interests    : '101',
		comments     : '102',
		backing      : '103',
		image        :
			'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg'
	},
	{
		number       : 2,
		shelterName  : 'shelterName2',
		shelterImage :
			'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg',
		email        : 'happyshelter@happy.com',
		donation     : 222222,
		name         : '튼튼이',
		age          : '3',
		abandonDate  : '2019.02.02',
		likes        : '200',
		interests    : '201',
		comments     : '202',
		backing      : '203',
		image        :
			'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg'
	},
	{
		number       : 3,
		shelterName  : '센터3',
		shelterImage :
			'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg',
		email        : 'happyshelter@happy.com',
		donation     : 333333,
		name         : '강아지',
		age          : '3',
		abandonDate  : '2019.03.03',
		likes        : '300',
		interests    : '301',
		comments     : '302',
		backing      : '303',
		image        :
			'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg'
	}
];

// let baseUrl =
// 	'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc';
// let url =
// 	baseUrl +
// 	'?serviceKey=' +
// 	serviceKey +
// 	'&bgnde=' +
// 	bgnde +
// 	'&endde=' +
// 	endde +
// 	'&upkind=' +
// 	upkind +
// 	'&state=' +
// 	state +
// 	'&pageNo=' +
// 	pageNo +
// 	'&numOfRows=' +
// 	numOfRows +
// 	'&neuter_yn=' +
// 	neuter_yn;

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing : false,
			dogs       : [ mockData ]
		};
	}

	componentDidMount() {
		return abandonmentPublicSrvc(
			serviceKey,
			bgnde,
			endde,
			upkind,
			kind,
			upr_ce,
			org_cd,
			care_reg_no,
			state,
			pageNo,
			numOfRows,
			neuter_yn
		);
	}

	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerLeft  : (
				<TouchableOpacity style={{ padding: 5, paddingLeft: 15 }}>
					<Ionicons name={'ios-menu'} size={35} color={'tomato'} />
				</TouchableOpacity>
			),
			headerRight : (
				<TouchableOpacity style={{ padding: 5, paddingRight: 15 }}>
					<Ionicons name={'ios-search'} size={35} color={'tomato'} />
				</TouchableOpacity>
			),
			title       : 'HOME'
		};
	};

	refreshData = () => {
		//
	};

	//shelterName, name, age, abandonDate, likes, interests, comments, image
	renderItem = ({ item, index }) => {
		return (
			<HomeCell
				{...item}
				// shelterName={this.state.dogs.shelterName}
				// name={this.state.dogs.name}
				// age={this.state.dogs.age}
				// abandonDate={this.state.dogs.abandonDate}
				// likes={this.state.dogs.likes}
				// interests={this.state.dogs.interests}
				// comments={this.state.dogs.comments}
				// // image={this.state.dogs.}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					style={styles.flatlist}
					data={mockData}
					renderItem={this.renderItem}
					onRefresh={this.refreshData}
					refreshing={this.state.refreshing}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={({ highlighted }) => (
						<View style={styles.itemSeparatorComponent} />
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container              : {
		flex            : 1,
		backgroundColor : '#fff'
	},
	flatlist               : {
		flexGrow : 1
	},
	scrollView             : {},
	itemSeparatorComponent : {
		height          : StyleSheet.hairlineWidth,
		marginLeft      : 10,
		marginRight     : -10,
		width           : '100%',
		backgroundColor : 'gray'
	}
});
