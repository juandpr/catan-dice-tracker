import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mockAction } from '../../redux/modules/game/actions';
import History from './History';

const mapDispatchToProps = dispatch => bindActionCreators({
  mockAction,
}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(History);
