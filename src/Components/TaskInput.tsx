import {Props} from '@react-native-community/checkbox/dist/CheckBox.android';
import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import TaskInputStyle from '../Styles/TaskInputStyle';
import TaskInputText from '../Styles/TaskInputText';
const TaskInput: FunctionComponent<Props> = ({whenChangeText}: any) => {
  return (
    <>
      <TaskInputText>Title</TaskInputText>
      <TaskInputStyle
        onChangeText={whenChangeText}
        placeholder="Design team meeting"
      />
    </>
  );
};
export default TaskInput;
