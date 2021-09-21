import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    static defaultProps = {
        children: <p>I can do all the things!!!</p>
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default List;