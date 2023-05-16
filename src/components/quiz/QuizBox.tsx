import React, { memo } from 'react';
import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';
import ArrowRight from '@assets/svg/arrow-right.svg';
import Check from '@assets/svg/check.svg';

interface Props {
  title: string;
  onPress: () => void;
  multiple?: boolean;
  selected?: boolean;
}

const QuizBox: React.FC<Props> = ({ title, onPress, multiple, selected }) => {
  const renderIcon = () => {
    if (multiple) {
      if (selected) {
        return (
          <ActiveCheckBox>
            <Check />
          </ActiveCheckBox>
        );
      }

      return <InactiveCheckBox />;
    }

    return <ArrowRight />;
  };

  return (
    <Box onPress={onPress}>
      <Name>{title}</Name>
      {renderIcon()}
    </Box>
  );
};

const Box = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  shadow-opacity: 0.1;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-offset: 1px 2px;
  shadow-radius: 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;
const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.aubergine2};
  font-size: ${({ theme }) => theme.fonts.size.l}px;
  flex: 1;
`;
const InactiveCheckBox = styled(View)`
  height: 20px;
  width: 20px;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.secondary};
`;
const ActiveCheckBox = styled(View)`
  height: 22px;
  width: 22px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export default memo(QuizBox);
