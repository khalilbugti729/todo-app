import React, {FunctionComponent, useState} from 'react';
import TaskInputText from '../Styles/TaskInputText';
import {Text, Image, Pressable} from 'react-native';
import DateDropDownStyle from '../Styles/DateDropDownStyle';
import DatePicker from 'react-native-date-picker';
import {Props} from '@react-native-community/checkbox/dist/CheckBox.android';

const DateTimeDropDown: FunctionComponent<Props> = ({whenConfirm}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <>
      <TaskInputText>Deadline</TaskInputText>
      <Pressable
        onPress={() => {
          setOpen(true);
        }}>
        <DateDropDownStyle>
          <Text>{date.toISOString().slice(0, -14)}</Text>
          <Image
            style={{width: 10, height: 10}}
            source={require('../Assets/down-arrow.png')}
          />
        </DateDropDownStyle>
      </Pressable>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          whenConfirm(date.toISOString().slice(0, -14));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
export default DateTimeDropDown;
