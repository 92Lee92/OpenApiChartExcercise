import {useState, useEffect} from 'react';
import {Button, NavItem, Table} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import SubwayLineChart from './SubwayLineChart';
import SubwaySheet from './SubwaySheet';
import SubwayAreaChart from './SubwayAreaChart';
import SubwayBarChart from './SubwayBarChart';
import SubwayComposedChart from './SubwayComposedChart';
function SubwayApiChart1(){
    const [row, setRow] = useState([]);
    const[viewChart, setViewChart] = useState(false);
    const apiRequest = () =>{

        axios.get("http://openapi.seoul.go.kr:8088/654f5865486b7975383944444b5847/json/CardSubwayStatsNew/1/30/20221025")
        .then((response) =>{
            console.log(response)
            console.log(response.data.CardSubwayStatsNew.row)
            setRow(response.data.CardSubwayStatsNew.row);
            setViewChart(true);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        apiRequest();
    }, []);

    return(
    <>
        {viewChart && (
            <>
            <SubwaySheet row={row}/><br/>
            <SubwayLineChart row={row}/><br/>
            <SubwayAreaChart row={row}/>
            <SubwayBarChart row={row}/>
            <SubwayComposedChart row={row}/>
            </>
            )
        }
    </>
)}

export default SubwayApiChart1;

//key 사용하는 이유 react dom이 반복적인 트리를 갖고있을때 키를 주지 않으면 데이터가 엉킨다. 