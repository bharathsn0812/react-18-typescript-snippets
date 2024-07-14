import React from 'react';
import PropTypes from 'prop-types';

// Define the type for props
type UserInfoProps = {
  age: number;
  name: string;
};

// Functional component using props
const UserInfo: React.FC<UserInfoProps> = ({ age, name }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

// Define prop types
UserInfo.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// Usage of the component
const App = () => {
  return <UserInfo age={30} name="Alice" />;
};

export default App;

/*
Explanation:
- We define a type `UserInfoProps` with `age` and `name` properties.
- The `UserInfo` component uses these props to display user information.
- We use `PropTypes` to define the expected types of the props and mark them as required.
- In the `App` component, we pass the necessary props to `UserInfo`.
*/
