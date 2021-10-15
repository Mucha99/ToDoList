import shortid  from 'shortid';

// selector
export const getListsForList = ({lists}, listId) => lists.filter(list => list.listId == listId);

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types 
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => ({ payload: { ...payload, id: shortid.generate()}, type: ADD_LIST});

// reducer 
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_LIST: 
      return [...statePart, action.payload];
    default: 
      return statePart;
  }
}