import React from 'react';
import styled from 'styled-components/native';

interface DefaultButtonProps {
  onPress: (event: unknown) => void;
  title: string;
  disabled?: boolean;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
  disabled,
}) => (
  <TouchableWrapper onPress={onPress} disabled={disabled}>
    <ButtonTitle>{title}</ButtonTitle>
  </TouchableWrapper>
);

const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.l}px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

const TouchableWrapper = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.red};
  margin-top: 32px;
  padding-vertical: 15px;
  padding-horizontal: 15px;
`;
