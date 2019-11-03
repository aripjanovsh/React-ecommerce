import React from 'react';
import {Provider} from "react-redux";
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/theme';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApiServiceProvider} from './shared/providers/ApiServiceContext';
import { PersistGate } from 'redux-persist/integration/react'
import Header from "./shared/components/Header";
import {HomePage, CartPage} from './pages';
import Container from "@material-ui/core/Container";
import ApiService from './services/MySiteService';
import createStore from './store/createStore';
import jsToImmutable from "./shared/utils/jsToImmutable";

const {store, persistor} = createStore(jsToImmutable(window.__INITIAL_STATE__ || {}));

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <ApiServiceProvider value={ApiService}>
                        <Router>
                            <Header/>
                            <Container>
                                <Switch>
                                    <Route
                                        path="/"
                                        component={HomePage}
                                        exact/>

                                    <Route
                                        path="/cart"
                                        component={CartPage}
                                    />

                                </Switch>
                            </Container>
                        </Router>
                    </ApiServiceProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default App;
