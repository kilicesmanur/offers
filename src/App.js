import './App.css';
import React from 'react'
import _ from "lodash"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Case1 from './pages/login.page';
import Case2 from './pages/case2';

import { OfflerListProvider } from './context/offer.list.context';
function App() {

    return (

        <Router>
            <OfflerListProvider>
                <Routes>
                    <Route path="/:id" element={<Case2></Case2>} />
                    <Route path={"*"} element={<Case1 />} />
                </Routes>
            </OfflerListProvider>
        </Router>
    );
}

export default App;
