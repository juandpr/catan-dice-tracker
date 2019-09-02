import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/modules/login/actions';
import Game from './Game';

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch);

const mapStateToProps = state => { 
	return ({
    errorMsg: state.login.errorMsg,
    user: state.login.data
	});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Game);
