import './App.css';
import React from 'react'
import _ from "lodash"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Case1 from './pages/case1';
import Case2 from './pages/case2';
import Case3 from './pages/case3';
import { OfflerListProvider } from './context/offer.list.context';
import Header from './components/header';
function App() {

    return (

        <Router>
            <OfflerListProvider>
                <Header></Header>
                <Routes>
                    <Route path="/case1" element={<Case1 />} />
                    <Route path="/case2" element={<Case2></Case2>} />
                    <Route path="/case3" element={<Case3></Case3>} />
                    <Route path={"*"} element={<Case1 />} />
                </Routes>
            </OfflerListProvider>
        </Router>
    );
}

export default App;
