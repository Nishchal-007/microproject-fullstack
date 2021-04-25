import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./components/HomeView";
import Navbar from "./components/Navbar";
import Hospitals from "./components/Hospitals";

const App = () => {
    return (
        <Router>
            <ChakraProvider>
                <div className="App">
                    <Navbar />
                    <div className="bodyMain">
                        <Switch>
                            <Route exact path="/" component={HomeView} />
                            <Route
                                exact
                                path="/hospitals"
                                component={Hospitals}
                            />
                        </Switch>
                    </div>
                </div>
            </ChakraProvider>
        </Router>
    );
};

export default App;
