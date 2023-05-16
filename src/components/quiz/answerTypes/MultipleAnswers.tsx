import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { ScrollView, View } from 'react-native';
import QuizBox from '@components/quiz/QuizBox';
import { DefaultButton } from '@components/buttons/DefaultButton';
import type { Options } from '@components/quiz/types';

interface Props {
  options: Options[];
  onPress: (selectedAnswers: string[]) => void;
}

const MultipleAnswers: React.FC<Props> = ({ options, onPress }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState(false);

  const handleSelectAll = () => {
    selectedAll ? setSelectedAll(false) : setSelectedAll(true);

    const allOptionValues = options.map(a => a.value);
    setSelectedAnswers(allOptionValues);
  };

  const handleCheckbox = (value: string) => {
    if (selectedAnswers.includes(value)) {
      return setSelectedAnswers(selectedAnswers.filter(item => item !== value));
    }

    setSelectedAnswers(oldArray => [...oldArray, value]);
  };

  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
        <QuizBox
          multiple
          title="Select all"
          selected={selectedAll}
          onPress={handleSelectAll}
        />
        {options.map(i => (
          <QuizBox
            key={i.value}
            selected={selectedAnswers.includes(i.value)}
            multiple
            title={i.label}
            onPress={() => handleCheckbox(i.value)}
          />
        ))}
      </Container>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <DefaultButton
          onPress={() => onPress(selectedAnswers)}
          title="Next"
          disabled={!selectedAnswers.length}
        />
      </View>
    </>
  );
};

const Container = styled(ScrollView)`
  margin-top: 10px;
  margin-bottom: 70px;
`;

export default memo(MultipleAnswers);
