import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppNavigation from './AppNavigation';
import { setGames } from '../../redux/modules/game/actions';

const mapDispatchToProps = dispatch => bindActionCreators({
  setGames
}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
