import {Props} from '@react-native-community/checkbox/dist/CheckBox.android';
import React, {FunctionComponent, useState} from 'react';
import TaskButtonStyle from '../Styles/TaskButonStyle';
import TaskButtonText from '../Styles/TaskButtonText';

const TaskButton: FunctionComponent<Props> = ({whenPressed, text}: any) => {
  return (
    <TaskButtonStyle onPress={whenPressed}>
      <TaskButtonText>{text}</TaskButtonText>
    </TaskButtonStyle>
  );
};
export default TaskButton;
