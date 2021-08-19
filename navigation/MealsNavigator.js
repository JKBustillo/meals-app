import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import { primaryColor, secondColor } from '../constants/Colors';
import { Platform } from 'react-native';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: primaryColor
    },
    headerTintColor: 'white'
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name='ios-restaurant'
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  },
  Favorites: {
    screen: FavNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name='ios-star'
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  }
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(tabScreenConfig, {
    shifting: true
  })
  :
  createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: secondColor
    }
  });

export default createAppContainer(MealsFavTabNavigator);