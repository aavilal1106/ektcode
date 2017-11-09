import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import System from '../constants/System.jsx';

let AppActions = {
	getInfo(data) {
		AppDispatcher.dispatch({
			actionType: System.GET_INFO,
			data: data
		});
	}
};

module.exports = AppActions;
