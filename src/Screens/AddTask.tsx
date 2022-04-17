import React from 'react';
import DateTimeDropDown from '../Components/DateTimeDropDown';
import RemindDropDown from '../Components/RemindDropDown';
import RepeatDropDown from '../Components/RepeatDropDown';
import StartDate from '../Components/StartDate';
import TaskInput from '../Components/TaskInput';
import Wrapper from '../Styles/Wrapper';
import {View} from 'react-native';
import VerticalDivider from '../Styles/VerticalDivider';
import EndDate from '../Components/EndDate';
import TaskButton from '../Components/TaskButton';
import {TaskModel} from '../model/TaskModel';
const AddTask = () => {
  const [input, setInput] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [remind, setRemind] = React.useState('');
  const [repeat, setRepeat] = React.useState('');
  return (
    <Wrapper>
      <TaskInput
        whenChangeText={text => {
          setInput(text);
        }}
      />
      <DateTimeDropDown
        whenConfirm={date => {
          setDate(date);
        }}
      />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <StartDate
          whenConfirm={date => {
            setStartDate(date);
          }}
        />
        <VerticalDivider />
        <EndDate
          whenConfirm={date => {
            setEndDate(date);
          }}
        />
      </View>
      <RemindDropDown
        whenConfirm={value => {
          setRemind(value);
        }}
      />
      <RepeatDropDown
        whenConfirm={value => {
          setRepeat(value);
        }}
      />
      <TaskButton
        whenPressed={() => {
          let task: TaskModel = {
            date: date,
            endTime: endDate,
            remind: remind,
            repeat: repeat,
            startTime: startDate,
            title: input,
          };
          console.log('data', task);
        }}
        text={'Create a Task'}
      />
    </Wrapper>
  );
};

export default AddTask;
