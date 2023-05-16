import React, { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  QuizQuestionsView,
  QuizStartView,
  ResultsView,
} from '@containers/Quiz';

import { getActiveRouteName, navigationRef } from '../utils/navigation';
import { Route } from './RouteNames';

const disabledAndroidBackScreens: string[] = [Route.Quiz];

let currentRouteName = 'unknown';
let previousRouteName = 'unknown';

export const getCurrentRouteName = () => currentRouteName;
export const getPreviousRouteName = () => previousRouteName;

const Navigator = () => {
  const onMount = () => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBack);

    return () => onUnmount();
  };

  const onUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', onAndroidBack);
  };

  useEffect(onMount, []);

  const onAndroidBack = () => {
    const scene = currentRouteName;
    const enableBack = disabledAndroidBackScreens.indexOf(scene) !== -1;

    return enableBack;
  };

  const onRouteChange = useCallback((state: NavigationState | undefined) => {
    if (state) {
      previousRouteName = currentRouteName;
      currentRouteName = getActiveRouteName(state);
    }
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onRouteChange}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Route.Quiz} component={QuizStartView} />
        <Stack.Screen name={Route.Questions} component={QuizQuestionsView} />
        <Stack.Screen name={Route.Results} component={ResultsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
