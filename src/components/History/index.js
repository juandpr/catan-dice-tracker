import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectGame } from '../../redux/modules/game/actions';
import History from './History';

const mapDispatchToProps = dispatch => bindActionCreators({
  selectGame
}, dispatch);

const mapStateToProps = state => { 
	return ({
    games: state.game.games
  });
};
  
export default connect(mapStateToProps, mapDispatchToProps)(History);
