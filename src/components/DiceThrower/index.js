import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DiceThrower from './DiceThrower';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(DiceThrower);
