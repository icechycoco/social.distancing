import React from 'react';
import AppContext from './AppContext';

export default class AppProvider extends React.Component {
  state = {
      input: {
        food: '',
        home: '',
        transport: '',
        money: ''
      }
  };

  render() {
      return (
          <AppContext.Provider
              value={{
                input: this.state.input,
                  onChange: (key, value) => {
                    const input = Object.assign({}, this.state.input);
                    input[key] = value;
                    this.setState({
                      input
                    });
                  },
                  clear: () => {
                    this.setState({
                      input: {
                        food: '',
                        home: '',
                        transport: '',
                        money: ''
                      }
                    });
                  }
              }}
          >
              {this.props.children}
          </AppContext.Provider>
      );
  }
}