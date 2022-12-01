import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts'

function SubwayLineChart({row}){
    return(
        <LineChart width={1000} height={300} data={row} style={{margin:"0 auto"}}
            margin={{top:5, right:30, left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"SUB_STA_NM"}/><YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey={"RIDE_PASGR_NUM"} stroke="#8884D8" activeDot={{r:8}}/>
                <Line type="monotone" dataKey={"ALIGHT_PASGR_NUM"} stroke="#82CA9D"/>
        </LineChart>
    )
}

export default SubwayLineChart;