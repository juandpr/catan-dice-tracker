import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGame, throwDice, undoDice } from '../../redux/modules/game/actions';
import Game from './Game';

const mapDispatchToProps = dispatch => bindActionCreators({
  newGame, throwDice, undoDice
}, dispatch);

const mapStateToProps = state => {
	return ({
    dice: state.game.current.dice
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
