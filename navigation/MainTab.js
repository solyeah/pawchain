import React from 'react';
import { Platform } from 'react-native';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeStack from './HomeStackNavigator';
import NewPostStack from './NewPostStackNavigator';
import SettingsStack from './SettingsStackNavigator';

const config = Platform.select({
	web     : { headerMode: 'screen' },
	default : {}
});

const DefaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'tomato'
	}
};

const MainTab = createBottomTabNavigator(
	{
		Home     : HomeStack,
		NewPost  : NewPostStack,
		Settings : SettingsStack
	},
	{
		tabBarOptions : {
			activeTintColor   : 'tomato',
			inactiveTintColor : 'gray'
		}
	}
);

const RootStack = createStackNavigator(
	{
		Main : {
			screen : MainTab
		}
		//
		//
	},
	{
		mode       : 'modal',
		headerMode : 'none'
	}
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
