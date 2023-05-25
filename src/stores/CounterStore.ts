import { makeAutoObservable } from 'mobx';

export interface CounterStoreType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export class CounterStore implements CounterStoreType {
  public count = 0;

  public constructor() {
    // mobx6的不同，函数式，而不再通过使用装饰器
    makeAutoObservable(this);
  }

  public increase() {
    this.count += 1;
  }

  public decrease() {
    this.count -= 1;
  }
}
