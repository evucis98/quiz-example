import React, { memo } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { DefaultButton } from '@components/buttons/DefaultButton';

interface Props {
  description?: string;
  onPress: () => void;
}

const InfoOption: React.FC<Props> = ({ description, onPress }) => (
  <>
    <Description>{description}</Description>
    <DefaultButton onPress={onPress} title="Next" />
  </>
);

const Description = styled(Text)`
  color: ${({ theme }) => theme.colors.aubergine1};
  font-size: ${({ theme }) => theme.fonts.size.m}px;
  margin-top: 20px;
`;

export default memo(InfoOption);
