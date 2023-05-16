import React, { memo, RefObject } from 'react';
import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';
import CloseIcon from '@assets/svg/close.svg';
import ChevronLeft from '@assets/svg/chevron-left.svg';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ProgressBar from '@components/quiz/ProgressBar';

interface Props {
  currentStep: number;
  totalSteps: number;
  swiperRef: RefObject<Swiper>;
}

const Header: React.FC<Props> = ({ currentStep, totalSteps, swiperRef }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (currentStep && swiperRef.current) {
      return swiperRef.current.scrollBy(-1, true);
    }

    if (!currentStep) return navigation.navigate('quiz');
  };

  const closeQuiz = () => {
    navigation.navigate('quiz');
  };

  return (
    <>
      <Row>
        <LeftItem onPress={handleGoBack}>
          <ChevronLeft />
        </LeftItem>
        <MiddleItem>
          <Title>
            Step {currentStep + 1} of {totalSteps}
          </Title>
        </MiddleItem>
        <RightItem onPress={closeQuiz}>
          <CloseIcon />
        </RightItem>
      </Row>
      <ProgressBar currentStepIndex={currentStep} totalSteps={totalSteps} />
    </>
  );
};

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.aubergine1};
  font-size: ${({ theme }) => theme.fonts.size.l}px;
  font-weight: 600;
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
`;
const LeftItem = styled(TouchableOpacity)`
  color: ${({ theme }) => theme.colors.aubergine1};
  font-size: ${({ theme }) => theme.fonts.size.xxxl}px;
  font-weight: 600;
  flex: 1;
`;
const MiddleItem = styled(View)`
  color: ${({ theme }) => theme.colors.aubergine1};
  font-size: ${({ theme }) => theme.fonts.size.xxxl}px;
  font-weight: 600;
  flex: 1;
  align-items: center;
`;
const RightItem = styled(TouchableOpacity)`
  color: ${({ theme }) => theme.colors.aubergine1};
  font-size: ${({ theme }) => theme.fonts.size.xxxl}px;
  font-weight: 600;
  flex: 1;
  align-items: flex-end;
`;

export default Header;
