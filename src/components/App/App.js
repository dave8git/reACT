import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
//import {pageContents, listData} from '../../data/dataStore.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {/* <List {...listData} /> */}
        {lists.map(listData => (
          console.log(listData),
          <List key={listData.id} {...listData} />
        ))}
        {console.log('listy', lists.map)}
      </main>
    );
  }
}

export default App;
