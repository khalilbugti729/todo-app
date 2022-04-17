import React, {FunctionComponent, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import TaskInputText from '../Styles/TaskInputText';
import {Props} from '@react-native-community/checkbox/dist/CheckBox.android';
const RemindDropDown: FunctionComponent<Props> = ({whenConfirm}: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <TaskInputText>Remind</TaskInputText>
      <Picker
        style={{backgroundColor: '#f8f8f8'}}
        mode="dropdown"
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          whenConfirm(itemValue);
        }}>
        <Picker.Item
          color="#bbb"
          label="10 times early"
          value="10 times early"
        />
        <Picker.Item
          color="#bbb"
          label="20 times early"
          value="20 times early"
        />
      </Picker>
    </>
  );
};
export default RemindDropDown;
