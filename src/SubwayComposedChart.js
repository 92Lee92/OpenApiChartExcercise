import { useState, useEffect} from "react";
import {ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

function SubwayComposedChart({row}) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(row.map(item=>({
            역이름: item.SUB_STA_NM,
            승차인구수:item.RIDE_PASGR_NUM,
            하차인구수: item.ALIGHT_PASGR_NUM,
            유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM
        })));
    },[]);
    
    return(
        <ComposedChart width={1200} height={300} data={data}
        margin={{top:5, right:50, Left:20, bottom:5}} style={{margin:"0 auto"}}>

            <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"역이름"}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar type="monotone" dataKey={"유동인구수"} fill="#82ca9d" />
                <Line type="monotoneX" dataKey={"승차인구수"} stroke="#ff7300"/>
                <Line type="monotoneX" dataKey={"하차인구수"} stroke="#fff000"/>
        </ComposedChart>
    )
} 

export default SubwayComposedChart;

