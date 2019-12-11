import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { throwDice, undoDice } from '../../redux/modules/game/actions';
import Game from './Game';

const mapDispatchToProps = dispatch => bindActionCreators({
  throwDice, undoDice
}, dispatch);

const mapStateToProps = state => {
	return ({
    currentGame: state.game.games.find(game => game.id === state.game.current)
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
