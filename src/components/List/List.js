// KOMPONENT KLASOWY
import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';

import Hero from '../Hero/Hero';
import Column from '../Column/Column';


class List extends React.Component {
    static defaultProps = {
        children: <p>I can do all the things!!!</p>
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
        children: PropTypes.node,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero 
                    titleText={this.props.title}
                    image={this.props.image}
                />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column title='Animals'/>
                    <Column title='Planets'/>
                    <Column title='Minerals'/>
                </div>
            </section>
        );
    }
}

export default List;