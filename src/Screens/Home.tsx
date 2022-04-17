import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import CompletedTask from '../Components/CompletedTask';
import PendingTask from '../Components/PendingTask';
import TaskButton from '../Components/TaskButton';
import Wrapper from '../Styles/Wrapper';
import useCounter from '../store/store';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
];

const Home = ({navigation}: Props) => {
  const [state, actions] = useCounter();
  const renderItem = () => (
    <>
      <CompletedTask />
      <PendingTask />
    </>
  );

  return (
    <SafeAreaView>
      <Wrapper>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <TaskButton text={state.count} whenPressed={actions.increment} />
      </Wrapper>
    </SafeAreaView>
  );
};
export default Home;
