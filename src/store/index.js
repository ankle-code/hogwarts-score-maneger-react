import { createStore, combineReducers, applyMiddleware } from "redux";
import housesReducer from "./modules/houses/reducer";
import studentsReducer from "./modules/students/reducer";
import showModalReducer from "./modules/showModal/reducer";
import selectedStudentReducer from "./modules/selectedStudent/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  houses: housesReducer,
  students: studentsReducer,
  showModal: showModalReducer,
  selectedStudent: selectedStudentReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
