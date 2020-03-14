import React from 'react';

class App extends React.Component {

  state = { //바꿀 데이터
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count +1 }));
  };
  minus = () => { //setState 할때마다 react는 새로운 state와 함께 reder fun을 호출함.
    this.setState(current => ({ count: current.count -1 }));
  };
  componentDidMount(){ //컴포넌트가 마운트된 직후
    console.log("component rendered");
  }
  componentDidUpdate(){ //state가 업데이트 될때
    console.log("i jsut updated")
  }
  componentWillUnmount(){ //component를 떠날 때 
    console.log("GOOOBYE, crule world")
  }
  render() {
    console.log("i`m rendering");
    return (
      <div>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
