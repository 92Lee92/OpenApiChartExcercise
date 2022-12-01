import {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';

function PostCodeApp(){
    const [address, setAddress] = useState("");
    const [openPostcode, setOpenPostCode] = useState(false);
    const handle = {
        clickButton:()=>{
            setOpenPostCode(!openPostcode);
        },
        selectAddress:(data) => {
            setAddress(
            `주소: ${data.address}
            우편번호: ${data.zonecode}`
        );
            setOpenPostCode(false);
        },
    }
    return(
        <div style={{margin:"0 auto"}}>
            <div style={{width:"500px", height:"30px"}}>{address}</div>
            <button onClick={handle.clickButton}>toggle</button>
        
        {openPostcode &&
            <DaumPostcode
                onComplete={handle.selectAddress}
                autoClose={false}
                defaultQuery='가산디지털1로 2'
            />}
        </div>
    )
}

export default PostCodeApp;