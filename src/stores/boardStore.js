import { observable, action, computed } from 'mobx';

class BoardStore {

  @observable appName = '7 Wonders App';


  @observable sciences = [
    
  ]


  constructor() {
    this.sciences.push({ symbol: "tablet", count: 0});
    this.sciences.push({ symbol: "compass", count: 0});
    this.sciences.push({ symbol: "gear", count: 0});
  }

  @computed get total() {
    var sciences = this.sciences;

    console.log(sciences);
    var squared = sciences.reduce((a,b) => a.count * a.count, 0);
    console.log(squared);
    var sets = Math.min(sciences.map(a => a.count)) * 7;
    console.log(sets);
    var total = squared = sets;
    return total;
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
