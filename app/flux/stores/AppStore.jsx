import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import System from '../constants/System.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import {browserHistory} from 'react-router';

let CHANGE_EVENT = 'change';

let AppData = {
	data: {
		info: ''
	},
	getInfo(action) {

	}
};


let AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppStore = assign({}, AppStore, {
	getAppData: () => {
		return AppData.data;
	}
});

AppDispatcher.register((action) => {
	switch (action.actionType) {
		case System.GET_INFO:
			GeneralData.getInfo(action);
			break;
		default:
			// no op
	}
});

module.exports = AppStore;
