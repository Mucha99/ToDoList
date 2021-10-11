import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';


class Column extends React.Component {
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    static propTypes = {
      children: PropTypes.node,
      title: PropTypes.string,
      icon: PropTypes.string,
      cards: PropTypes.array,
    }
    
    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
            {title}
          </h3>
          {/*<div className={styles.creator}>
            <Creator 
              text={settings.cardCreatorText} 
              action={title => this.addCard(title)} 
            />
          </div>*/}
          <div>
            {cards.map(cardData => (
              <Card key={cardData.Id} {...cardData}/>
            ))}
          </div>
        </section>
      );
    }
}

export default Column;