import React, {FunctionComponent, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import TaskInputText from '../Styles/TaskInputText';
import {Props} from '@react-native-community/checkbox/dist/CheckBox.android';
const RepeatDropDown: FunctionComponent<Props> = ({whenConfirm}: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <TaskInputText>Repeat</TaskInputText>
      <Picker
        style={{backgroundColor: '#f8f8f8'}}
        mode="dropdown"
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          whenConfirm(itemValue);
        }}>
        <Picker.Item color="#bbb" label="Weekly" value="Weekly" />
        <Picker.Item color="#bbb" label="Monthly" value="Monthly" />
      </Picker>
    </>
  );
};
export default RepeatDropDown;
