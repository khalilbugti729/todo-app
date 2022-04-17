import React, {FunctionComponent, useState} from 'react';
import TaskInputText from '../Styles/TaskInputText';
import {Text, Image, Pressable, View} from 'react-native';
import DateDropDownStyle from '../Styles/DateDropDownStyle';
import DatePicker from 'react-native-date-picker';
import {Props} from '@react-native-community/checkbox/dist/CheckBox.android';
const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'Pm' : 'Am';
  hours %= 12;
  hours = hours || 12;
  minutes = Number(minutes < 10 ? `0${minutes}` : minutes);
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};
const EndDate: FunctionComponent<Props> = ({whenConfirm}: any) => {
  const [endTime, setEndTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={{display: 'flex', flex: 1}}>
      <TaskInputText>End Date</TaskInputText>
      <Pressable
        onPress={() => {
          setOpen(true);
        }}>
        <DateDropDownStyle>
          <Text>{formatAMPM(endTime)}</Text>
          <Image
            style={{width: 15, height: 15}}
            source={require('../Assets/wall-clock.png')}
          />
        </DateDropDownStyle>
      </Pressable>

      <DatePicker
        modal
        mode="time"
        open={open}
        date={endTime}
        onConfirm={date => {
          setOpen(false);
          setEndTime(date);
          whenConfirm(formatAMPM(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
export default EndDate;
