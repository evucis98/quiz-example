import React, { memo } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
  </>
);

const StyledTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.aubergine1};
  font-size: ${({ theme }) => theme.fonts.size.xxxl}px;
  font-weight: 600;
`;

export default Title;
