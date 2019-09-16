import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewGame from './NewGame';
import { newGame } from '../../redux/modules/game/actions';

const mapDispatchToProps = dispatch => bindActionCreators({
	newGame
}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
