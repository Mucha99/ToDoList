import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

import List from '../List/List';
import Creator from '../Creator/Creator';
import { pageContents, listData } from '../../data/dataStore';
import { settings } from '../../data/dataStore';


class App extends React.Component {
  state = {
    lists: [{...listData}],
  }

  static propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array,
  }

  addList(title){
    this.setState(state => ({
      lists: [
        ...state.lists,
        {
          key: state.lists.length ? state.lists[state.lists.length -1].key +1 :0,
          ...listData,
          title,
        },
      ],
    }));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div className={styles.creator}>
          <Creator 
            text={settings.listCreatorText} 
            action={title => this.addList(title)} 
          />
        </div>
        <div>
          {this.state.lists.map(({key, ...listData}) => (
            <List key={key} {...listData} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
