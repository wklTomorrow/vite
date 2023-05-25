import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '@src/stores';
import './test.css';
import './test.less';
import styles from './test.module.less';

/**
 *
 * @returns use mobx
 */
const Test = () => {
  const { counterStore } = useStore();
  return (
    <>
      <div className={styles.red}>hello world</div>
      <div className="yellow">yello world</div>
      <div className="blue"> {counterStore.count}</div>
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
