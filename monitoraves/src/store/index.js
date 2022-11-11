import { legacy_createStore as createStore, combineReducers } from "redux";

import nomeSecaoReducer from "./modules/nomeSecao/reducer";
import tipoFiltroReducer from "./modules/tipoFiltro/reducer";
import lotesReducer from "./modules/lotes/reducer";
import mortalidadesReducer from "./modules/mortalidades/reducer";
import idFiltroReducer from "./modules/idFiltro/reducer";
import pesoMedioSexoReducer from "./modules/pesoMedioSexo/reducer";
import morteMediaSexoReducer from "./modules/morteMediaSexo/reducer";

const reducers = combineReducers({ nomeSecao: nomeSecaoReducer, tipoFiltro: tipoFiltroReducer, lotesInfo: lotesReducer, mortalidade: mortalidadesReducer, idFiltroReq: idFiltroReducer, pesoMedioSexo: pesoMedioSexoReducer, morteMediaSexo: morteMediaSexoReducer});

const store = createStore(reducers);

export default store;