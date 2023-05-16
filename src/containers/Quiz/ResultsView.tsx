import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAnswers } from '@state/quiz/QuizSlice';
import { useRoute } from '@react-navigation/native';

export const ResultsView: React.FC = () => {
  const { params } = useRoute();
  const answers = useSelector(selectAnswers);

  const renderAnswer = key => {
    const question = params.find(item => item.key === key);

    return (
      <View key={key}>
        <Text>{question?.label}</Text>
        <Text>{answers[key]?.toString()}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {Object.keys(answers).map(key => renderAnswer(key))}
    </SafeAreaView>
  );
};
