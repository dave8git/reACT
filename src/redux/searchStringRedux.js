// selectors
export const getSearchString = (searchString) => searchString.state;

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
 
// action name creator

const reducerName = 'search';

const createActionName = name => `app/${reducerName}/${name}`;

// actions types

export const CHANGE = createActionName('CHANGE');

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

