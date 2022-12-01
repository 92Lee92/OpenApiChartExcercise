import {useState} from 'react';
import {Button, NavItem, Table} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
function SubwayApi(){
    const [row, setRow] = useState([]);
    const apiRequest = () =>{

        console.log("통신접근") //여기부터 안됨

        axios.get("http://openapi.seoul.go.kr:8088/654f5865486b7975383944444b5847/json/CardSubwayStatsNew/1/1000/20221025")
        .then((response) =>{
            console.log(response)
            console.log(response.data.CardSubwayStatsNew.row)
            setRow(response.data.CardSubwayStatsNew.row);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return(
        <>
        <Button onClick={apiRequest}>데이터 가져오기</Button>
            <Table style={{width:"600px", margin: "0 auto"}}>
                <tbody>
                    <tr>
                        <th>날짜</th>
                        <th>라인</th>
                        <th>역이름</th>
                        <th>승차인원수</th>
                        <th>하차인원수</th>
                        <th>차이</th>
                    </tr>
                    {
                        row.map(item=>(    
                            <tr key = {item.SUB_STA_NM}>
                                <td>{item.USE_DT}</td>
                                <td>{item.LINE_NUM}</td>
                                <td>{item.SUB_STA_NM}</td>
                                <td>{item.RIDE_PASGR_NUM}</td>
                                <td>{item.ALIGHT_PASGR_NUM}</td>
                                <td>{item.RIDE_PASGR_NUM-item.ALIGHT_PASGR_NUM}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default SubwayApi;

//key 사용하는 이유 react dom이 반복적인 트리를 갖고있을때 키를 주지 않으면 데이터가 엉킨다. 