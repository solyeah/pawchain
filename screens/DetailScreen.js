import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	TextInput
} from 'react-native';
import CommentCell from '../components/CommentCell';
import IconText from '../components/IconText';
import { FlatList } from 'react-native-gesture-handler';
const mockData = [
	{
		id      : 'happy',
		comment : '안쓰러워요ㅠㅠ',
		key     : 1
	},
	{
		id      : 'lov_dog',
		comment : '후원하고 갑니다...',
		key     : 2
	}
];

export default class DetailScreen extends Component {
	constructor(props) {
		super(props);
		const image = this.props.navigation.getParam('image');
		const name = this.props.navigation.getParam('name');
		const shelterName = this.props.navigation.getParam('shelterName');
		const likes = this.props.navigation.getParam('likes');
		const interests = this.props.navigation.getParam('interests');
		const comments = this.props.navigation.getParam('comments');
		const backing = this.props.navigation.getParam('backing');
		this.state = {
			refreshing  : false,
			image,
			name,
			shelterName,
			likes,
			interests,
			comments,
			backing

			// comments    : [ mockData ]
		};
	}
	static navigationOptions = ({ navigation }) => {
		// const params = navigation.state.params || {};
		//제목추가
		return {
			headerRight      : <View style={{ padding: 5, paddingLeft: 15 }} />,
			title            : navigation.getParam('name'),
			headerTitleStyle : {
				textAlign : 'center',
				flex      : 1,
				fontSize  : 22
			}
		};
	};

	renderItem = ({ item }) => {
		return <CommentCell {...item} />;
	};
	render() {
		return (
			<View style={styles.container}>
				<Image
					// source={require('../assets/images/zzang.jpg')}
					source={{ uri: this.state.image }}
					style={styles.image}
				/>
				<Text style={styles.titleText}>{this.state.shelterName}</Text>
				<View style={styles.itemBar}>
					<IconText
						iconName={'ios-heart-empty'}
						children={this.state.likes + '좋아요'}
						type={true}
					/>
					<IconText
						iconName={'ios-paw'}
						children={this.state.interests + '관심'}
						type={true}
					/>
					<IconText
						iconName={'comment-outline'}
						type={false}
						children={this.state.comments + '댓글'}
					/>
					<IconText
						iconName={'bone'}
						type={false}
						children={this.state.backing + '후원'}
					/>
				</View>
				<ScrollView style={styles.contentScroll}>
					<Text style={styles.content}>
						절미 인절미 짱절미{'\n'}
						절미절미 인절미 짱절미{'\n'}
						절미절미절미 인절미 짱절미{'\n'}
						절미절미절미절미 인절미 짱절미{'\n'}
						절미절미절미절미절미 인절미 짱절미{'\n'}
						절미 인절미 짱절미{'\n'}
						절미절미 인절미 짱절미{'\n'}
						절미절미절미 인절미 짱절미{'\n'}
						절미절미절미절미 인절미 짱절미{'\n'}
						절미절미절미절미절미 인절미 짱절미{'\n'}
						절미 인절미 짱절미{'\n'}
						절미절미 인절미 짱절미{'\n'}
						절미절미절미 인절미 짱절미{'\n'}
						절미절미절미절미 인절미 짱절미{'\n'}
						절미절미절미절미절미 인절미 짱절미{'\n'}
						{'\n'}
						입양문의 : 행복보호소 (02-xxx-xxxx)
					</Text>
				</ScrollView>
				<TouchableOpacity>
					<Text style={styles.showcomment}>댓글 보기</Text>
				</TouchableOpacity>
				<ScrollView style={styles.commentScroll}>
					<FlatList
						style={styles.commentlist}
						data={mockData}
						renderItem={this.renderItem}
						onRefresh={this.refreshData}
						refreshing={this.state.refreshing}
						keyExtractor={(item, index) => index.toString()}
					/>
				</ScrollView>
				<TextInput style={styles.input} placeholder={'댓글을 입력해 주세요.'} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container     : {
		flex : 1
	},
	image         : {
		width        : '100%',
		height       : 240,
		resizeMode   : 'stretch',
		marginBottom : 10
	},
	titleText     : {
		height     : 40,
		fontSize   : 25,
		marginLeft : 15
	},
	content       : {
		marginLeft : 15
	},
	itemBar       : {
		height        : 40,
		flexDirection : 'row',
		marginLeft    : 15
	},
	contentScroll : {
		height : 220
	},
	showcomment   : {
		color         : 'gray',
		fontSize      : 12,
		marginLeft    : 15,
		paddingTop    : 10,
		paddingBottom : 10
	},
	commentlist   : {
		marginLeft    : 15,
		paddingBottom : 5
	},
	commentScroll : {
		height : 60
	},
	input         : {
		marginLeft : 15
	}
});
