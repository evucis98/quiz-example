import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

interface Props {
  currentStepIndex: number;
  totalSteps: number;
}

const ProgressBar: React.FC<Props> = ({ currentStepIndex, totalSteps }) => {
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  return (
    <ProgressBarContainer>
      <ActiveProgressBar progress={progress} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.disabled};
  height: 2px;
  margin-vertical: 15px;
  width: 100%;
`;
const ActiveProgressBar = styled(View)`
  background-color: ${({ theme }) => theme.colors.red};
  width: ${({ progress }: { progress: number }) => progress}%;
  height: 100%;
`;

export default ProgressBar;
