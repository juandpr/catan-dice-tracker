import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import History from './History';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({
    games: state.game.games
  });
};
  
export default connect(mapStateToProps, mapDispatchToProps)(History);
