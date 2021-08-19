import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import { primaryColor, secondColor } from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailScreen
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: primaryColor
      },
      headerTintColor: 'white'
    }
  });

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    }
  },
  Favorites: { screen: FavoritesScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
  }}
}, {
  tabBarOptions: {
    activeTintColor: secondColor
  }
});

export default createAppContainer(MealsFavTabNavigator);