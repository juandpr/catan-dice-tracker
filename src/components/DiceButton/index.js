import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DiceButton from './DiceButton';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(DiceButton);
