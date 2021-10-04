import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Planes} from "./components/planes/planes";
import {PlaneDetails} from "./components/planes/plane-details";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    planes_list: [],
    update_selector: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_DATA':
            return {
                ...state,
                planes_list: action.payload
            }
        case 'UPDATE_SELECTOR':
            return {
                ...state,
                update_selector: state.update_selector + 1
            }
        default:
            return state
    }

}

const store = createStore(reducer)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={'/planes/:id'} component={PlaneDetails}/>
                    <Route path={'/planes'} component={Planes}/>
                    <Route path={'/'} exact>
                        <Redirect to="/planes"/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;
