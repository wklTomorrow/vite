import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '@src/stores';

const Test = () => {
  const { counterStore } = useStore();
  return (
    <>
      hello world
      {counterStore.count}
      <button
        onClick={() => {
          counterStore.increase();
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          counterStore.decrease();
        }}
      >
        plus
      </button>
    </>
  );
};

export default observer(Test);
