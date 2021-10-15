// KOMPONENT KLASOWY
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';

import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import { listData, settings } from '../../data/dataStore';


class List extends React.Component {
    static defaultProps = {
      description: settings.defaultListDescription,
      image: listData.image,
    }

    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }

    render() {
      const {title, image, description, columns, addColumn} = this.props;
      return (
        <section className={styles.component}>
          <Hero 
            titleText={title}
            image={image}
          />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.creator}>
            <Creator 
              text={settings.columnCreatorText} 
              action={addColumn} 
            />
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.Id} {...columnData} />
            ))}
          </div>
        </section>
      );
    }
}

export default List;