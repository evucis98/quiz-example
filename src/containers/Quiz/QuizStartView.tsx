import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Title from '@components/quiz/Title';
import QuizBox from '@components/quiz/QuizBox';
import { Api } from '@api/api';
import type { QuizResult } from '@components/quiz/types';

export const QuizStartView: React.FC = () => {
  const [quiz, setQuiz] = useState<QuizResult | null>(null);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const { record } = await Api.get('/b/62cd20b4ecfa6c12a01fa4ed');

      setQuiz(record);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnPress = () => {
    navigation.navigate('questions', quiz?.questions);
  };

  return (
    <Background>
      <Container>
        <Title title="Quiz" />
        <View style={{ marginTop: 10 }}>
          {!!quiz && <QuizBox title={quiz.name} onPress={handleOnPress} />}
        </View>
      </Container>
    </Background>
  );
};

const Background = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
const Container = styled(View)`
  padding-horizontal: 15px;
  margin-top: 15px;
`;
