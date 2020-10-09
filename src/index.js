import './styles.css'
import {createStore} from "./createStore";
import {rootReducer} from "./redux/rootReducer";
import {increment} from "./redux/actions";

document.getElementById("counter").textContent = 0;

const store = createStore(rootReducer, 0);
window.store = store;

store.subscribe(() => {
    console.log("1", store.getState());
});


store.subscribe(() => {
    console.log("2", store.getState());
});

store.dispatch(increment());
