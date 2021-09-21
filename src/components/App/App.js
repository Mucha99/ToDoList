import React from 'react';
import List from '../List/List';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world !</h2>
        <List />
      </main>
    )
  }
}

export default App;
