import { useState, useEffect } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts'

function SubwayBarChart({row}){
    const [data, setData] = useState([]);
    const [data1,setData1] = useState([]);

    useEffect(() => {
        setData(row.map(item => ({
            역이름: item.SUB_STA_NM,
            유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM
        })));
        
    }, []);

    return(
        <>
        <BarChart width={1000} height={300} data={data} 
            margin={{top:5, right:50, Left:20, bottom:5}} style={{margin:"0 auto"}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"역이름"}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar type="monotone" dataKey={"유동인구수"} fill="#82ca9d" />
                
        </BarChart>
        <BarChart width={1000} height={300} data={data} layout={"vertical"}
            margin={{top:5, right:30, left:20, bottom:5}} style={{margin:"0 auto"}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type={'number'} dataKey={"유동인구수"} />
                <YAxis type = {'category'} dataKey={"역이름"} />
                <Tooltip/>
                <Legend/>
                <Bar type="monotone" dataKey={"유동인구수"} fill="#8884D8" />
                
        </BarChart>
        </>
    )
}

export default SubwayBarChart;