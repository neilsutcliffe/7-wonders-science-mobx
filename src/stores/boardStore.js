import { observable, action, computed } from 'mobx';

class BoardStore {
  @observable sciences = [

  ]


  constructor() {
    this.sciences.push({ symbol: "tablet", count: 2 });
    this.sciences.push({ symbol: "compass", count: 2 });
    this.sciences.push({ symbol: "gear", count: 2 });
  }

  getScore = (countArray) => {
    var score = 0;

    countArray.forEach(count => {
      score += (count * count);
    });

    score += (this.sets * 7);

    return score;
  }

  @computed get total() {
    var total = this.getScore(this.countArray);
    return total;
  }

  @computed get sets() {
    return Math.min(...this.countArray)
  }

  @computed get countArray() {
    return this.sciences.map(science => science.count);
  }

  @action addTech = (clicked) => {
    var match = this.sciences.find((science) => { return science.symbol === clicked.symbol });
    match.count++;
  }

  @action removeTech = (clicked) => {
    var match = this.sciences.find((science) => { return science.symbol === clicked.symbol });
    match.count--;
  }
}

export default new BoardStore();
