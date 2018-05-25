import React from 'react'
import classes from './App.css'
import Counter from './Counter'

class App extends React.Component {
  state = {
    title: 'React App'
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>{this.state.title}</h1>

        <Counter />
      </div>
    )
  }
}

export default App