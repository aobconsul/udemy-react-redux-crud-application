import React, { Component } from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log('I am clicked!');
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   );
// };

// const Cat = () => {
//   return <div>Meow!</div>;
// };

// const App = () => {
//   const plofiles = [
//     { name: 'Taro', age: 10 },
//     { name: 'Hanako', age: 5 },
//     { name: 'NoName' }
//   ];
//   return (
//     <div>
//       {plofiles.map((plofiles, index) => {
//         return <User name={plofiles.name} age={plofiles.age} key={index} />;
//       })}
//     </div>
//   );
// };

const App = () => <Counter />;

class Counter extends Component {
  // 初期化処理
  constructor(props) {
    super(props);
    // console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    // console.log('handlePlusButton');
    // console.log(this.state.count);
    // const currentCount = this.state.count;
    // const count = this.state.count;
    // this.setState({ count: count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       Hi! I am {props.name}, and {props.age} years old!
//     </div>
//   );
// };

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// };

// User.defaultProps = {
//   age: 1
// };

export default App;
