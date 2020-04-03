import React from 'react';

const AppContext = React.createContext({
  input: {
    food: '',
    home: '',
    transport: '',
    money: ''
  }
});

export default AppContext;