import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Text} from 'react-native';
import TaskContainer from '../Styles/TaskContainer';
const SingleTask = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <TaskContainer>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text>Design Team Meeting</Text>
    </TaskContainer>
  );
};

export default SingleTask;
