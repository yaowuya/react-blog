import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import AppLayout from "./layout/AppLayout";

function App() {
    return (
        <div className="App">
            <Router>
                <Route path='/' exact component={Login}></Route>
                <Route path='/index/' exact component={AppLayout}></Route>
            </Router>
        </div>
    );
}

export default App;
