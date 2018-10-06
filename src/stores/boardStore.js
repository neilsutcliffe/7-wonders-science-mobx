import { observable, action, reaction } from 'mobx';

class BoardStore {

  @observable appName = '7 Wonders App';


  @observable sciences = [
    
  ]


  constructor() {
    this.sciences.push({ symbol: "tablet", count: 0});
    this.sciences.push({ symbol: "compass", count: 0});
    this.sciences.push({ symbol: "gear", count: 0});
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
