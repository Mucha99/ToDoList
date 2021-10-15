import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import { listData } from '../../data/dataStore';
import { settings } from '../../data/dataStore';


class App extends React.Component {
  state = {
    lists: [{...listData}],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    columns: PropTypes.array,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }

  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.creator}>
          <Creator 
            text={settings.listCreatorText} 
            action={addList} 
          />
        </div>
        <div>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
