import React from 'react';
import SingleTask from './SingleTask';
import TaskHeaderText from '../Styles/TaskHeaderText';
const CompletedTask = () => {
  return (
    <>
      <TaskHeaderText>Completed tasks</TaskHeaderText>
      <SingleTask />
    </>
  );
};

export default CompletedTask;
