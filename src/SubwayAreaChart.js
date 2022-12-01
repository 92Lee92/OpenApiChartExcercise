import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis,YAxis,CartesianGrid,Tooltip } from "recharts";

function SubwayAreaChart({ row }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(row.map(item => ({
            역이름: item.SUB_STA_NM,
            유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM
        })));
    }, []);

    return (
        <>
            <AreaChart width={1000} height={300} data={data} style={{margin:"0 auto"}}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="역이름" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="유동인구수" stroke="#8884d8" fillOpacity={1} fill="#8884d8" />
                
            </AreaChart>
        </>
    )
}

export default SubwayAreaChart;