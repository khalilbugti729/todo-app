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
const StartDate: FunctionComponent<Props> = ({whenConfirm}: any) => {
  const [startTime, setStartTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={{display: 'flex', flex: 1}}>
      <TaskInputText>Start Date</TaskInputText>
      <Pressable
        onPress={() => {
          setOpen(true);
        }}>
        <DateDropDownStyle>
          <Text>{formatAMPM(startTime)}</Text>
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
        date={startTime}
        onConfirm={date => {
          setOpen(false);
          setStartTime(date);
          whenConfirm(formatAMPM(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
export default StartDate;
