import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

class AppOne extends React.Component {
	render() {
		return (
			<div>
				Hello World One!!!
				<div>
					<p>Clicked : {this.props.state.clickedCount}</p>
					<button onClick={() => this.props.actions.incrementClick()}> + </button>
					<button onClick={() => this.props.actions.decrementClick()}> - </button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		state: state
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(AppOne);
