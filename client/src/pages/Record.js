import React, { useState } from 'react';
import '../App.css'
import Sidebar from '../components/Sidebar.js'
import Calendar from 'react-calendar';
import './Record.css';
import moment from "moment";

function Record() {
    const [value, onChange] = useState(new Date());

    const marks = [     //날짜 마킹 일 월 년 순
        "08-11-2022"
      ];

    return (
        <>
            <Sidebar/>
            <div className="rectxt"><h1>기록</h1></div>
            <Calendar 
                onChange={onChange}
                value={value}
                locale="en-EN"
                tileClassName={({ date, view }) => {
                    if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                        return "highlight";
                    }
                }}
            />
            
            <div className="txt">-01:23 멧돼지 출몰<br/>-04:56 고라니 출몰</div>


        </>
    );
}

export default Record;
