import store from "./store/index";
import {incrementCount} from './actions/index';

window.store = store;
window.incrementCount = incrementCount;