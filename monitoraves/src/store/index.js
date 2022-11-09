import { legacy_createStore as createStore, combineReducers } from "redux";

import nomeSecaoReducer from "./modules/nomeSecao/reducer";
import tipoFiltroReducer from "./modules/tipoFiltro/reducer";

const reducers = combineReducers({ nomeSecao: nomeSecaoReducer, tipoFiltro: tipoFiltroReducer});

const store = createStore(reducers);

export default store;