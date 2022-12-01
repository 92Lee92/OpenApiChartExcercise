import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts'
function RechartsBarTest (){
    const data = [
        {군구 : '광진구', 유동인구수:32760, 비유동인구수:34000},
        {군구 : '동대문구', 유동인구수:30480, 비유동인구수:56000},
        {군구 : '마포구', 유동인구수:27250, 비유동인구수:23000},
        {군구 : '구로구', 유동인구수:49870, 비유동인구수:67000},
        {군구 : '금천구', 유동인구수:44000, 비유동인구수:42000},
    ]

    return(
        <BarChart width={1000} height={300} data={data}
            margin={{top:5, right:30, left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"군구"}/><YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar type="monotone" dataKey={"유동인구수"} fill="#8884D8"/>
                <Bar type="monotone" dataKey={"비유동인구수"} fill="#82CA9D"/>
            </BarChart>
    )
    
}


export default RechartsBarTest;