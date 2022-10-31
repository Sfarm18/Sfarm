import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import '../../App.css'
import Sidebar from '../Sidebar.js'
import SlideBanner from '../Slidebanner';
import CCTV from './CCTV';
import Weather from './Weather'
import Record from './Record';

function MyFarm() {
    return (
        <>
            <SlideBanner />
            <Sidebar/>
            <Routes>
                <Route path="/weather" element = {<Weather />} />
                <Route path="/cctv" element = {<CCTV />} />
                <Route path="/record" element = {<Record />} />
            </Routes>

        </>
    );
}

export default MyFarm;