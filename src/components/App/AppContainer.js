import { connect } from 'react-redux';
import App from './App';
import { getListsForList, createActionAddList } from '../../redux/listsRedux';

const mapStateToProps = (state, props) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getListsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: (title, subtitle) => dispatch(createActionAddList({
    listId: props.id,
    title,
    subtitle,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);