import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));
export default store;
