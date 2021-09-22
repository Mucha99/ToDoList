// KOMPONENT KLASOWY
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';

import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import { settings } from '../../data/dataStore';


class List extends React.Component {
    state = {
        columns: this.props.columns || [],
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero 
                    titleText={this.props.title}
                    image={this.props.image}
                />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    {this.state.columns.map(({key, ...columnProps}) => (
                        <Column key={key} {...columnProps} />
                    ))}
                </div>
            </section>
        );
    }
}

export default List;