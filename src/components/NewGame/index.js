import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewGame from './NewGame';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
