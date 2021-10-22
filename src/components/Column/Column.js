import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
 
const Column = props => {
  <section className={styles.component}>
    <h3 className={styles.title}>{props.title}<span className={styles.icon}><Icon name={props.icon ? props.icon : 'forward'}/></span></h3>
    <div className={styles.cards}>
      {props.cards.map(cardData => ( 
        <Card key={cardData.id} {...cardData} />
      ))}
    </div> 
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={props.addCard} />
    </div>
  </section>
}; 

Column.propTypes = {
  addCard: PropTypes.func,
  title: PropTypes.node.isRequired, 
  description: PropTypes.node,
  columns: PropTypes.array, 
  image: PropTypes.node,
  children: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.node,
}; 

export default Column;

// class Column extends React.Component {
//     static defualtProps = {
//       icon: settings.defaultColumnIcon,
//     }
//     static propTypes = {
//       addCard: PropTypes.func,
//       title: PropTypes.node.isRequired, 
//       description: PropTypes.node,
//       columns: PropTypes.array, 
//       image: PropTypes.node,
//       children: PropTypes.node,
//       cards: PropTypes.array,
//       icon: PropTypes.node,
//     }
//     render() {
//       const {title, icon, cards, addCard} = this.props;
//       return (
//         <section className={styles.component}>
//           <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon ? icon : 'forward'}/></span></h3>
//           <div className={styles.cards}>
//             {cards.map(cardData => ( 
//               <Card key={cardData.id} {...cardData} />
//             ))}
//           </div> 
//           <div className={styles.creator}>
//             <Creator text={settings.columnCreatorText} action={addCard} />
//           </div>
//         </section>
//       );
//     }
// }

// export default Column; 