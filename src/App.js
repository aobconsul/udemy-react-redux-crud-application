import React from 'react';

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

const App = () => {
  const plofiles = [
    { name: 'Taro', age: 10 }, 
    { name: 'Hanako', age: 5 },
    { name: "NoName"}];
  return (
    <div>
      {plofiles.map((plofiles, index) => {
        return <User name={plofiles.name} age={plofiles.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hi! I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 1
};

export default App;
