import React, { memo } from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import QuizBox from '@components/quiz/QuizBox';
import type { Options } from '@components/quiz/types';

interface Props {
  options: Options[];
  onPress: (answer: string) => void;
}

const SingleAnswers: React.FC<Props> = ({ options, onPress }) => (
  <Container showsVerticalScrollIndicator={false}>
    {options.map(i => (
      <QuizBox key={i.value} title={i.label} onPress={() => onPress(i.value)} />
    ))}
  </Container>
);

const Container = styled(ScrollView)`
  margin-top: 10px;
`;

export default memo(SingleAnswers);
