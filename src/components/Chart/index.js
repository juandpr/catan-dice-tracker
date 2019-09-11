import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from './Chart';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
