import React, { Fragment, ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Title from '@components/quiz/Title';
import SingleAnswers from '@components/quiz/answerTypes/SigngleAnswers';
import MultipleAnswers from '@components/quiz/answerTypes/MultipleAnswers';
import InfoOption from '@components/quiz/answerTypes/InfoOption';
import Header from '@components/quiz/Header';
import type { QuestionTypes } from '@components/quiz/types';
import { Options, Question } from '@components/quiz/types';
import { saveAnswer } from '@state/quiz/QuizSlice';

interface OptionTypes {
  type: QuestionTypes;
  options: Options[];
  description?: string;
  key: string;
}

export const QuizQuestionsView: React.FC = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const handleAnswer = (
    type: QuestionTypes,
    key?: string,
    answers?: string | string[],
  ) => {
    if (swiperRef.current) swiperRef.current.scrollBy(1, true);

    dispatch(saveAnswer({ answers, key }));

    if (currentStep + 1 === params.length) {
      navigation.navigate('results', params);
    }
  };

  const renderOptions = ({ type, options, description, key }: OptionTypes) => {
    const types: { [itemKey: string]: ReactElement } = {
      single: (
        <SingleAnswers
          options={options}
          onPress={answers => handleAnswer(type, key, answers)}
        />
      ),
      multiple: (
        <MultipleAnswers
          options={options}
          onPress={answers => handleAnswer(type, key, answers)}
        />
      ),
      info: (
        <InfoOption
          description={description}
          onPress={() => handleAnswer(type)}
        />
      ),
    };

    return types[type] || null;
  };

  return (
    <Background>
      <Header
        swiperRef={swiperRef}
        currentStep={currentStep}
        totalSteps={params.length}
      />
      <Container>
        <Swiper
          loadMinimal
          loadMinimalSize={1}
          showsButtons={false}
          showsPagination={false}
          loop={false}
          scrollEnabled={false}
          ref={swiperRef}
          onIndexChanged={setCurrentStep}
          keyboardShouldPersistTaps="always"
        >
          {params.map((item: Question) => (
            <Fragment key={item.key}>
              <Title title={item.label} />
              {renderOptions(item)}
            </Fragment>
          ))}
        </Swiper>
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
  flex: 1;
`;
