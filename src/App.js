import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Row,Col,Button} from "reactstrap";
 import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Icons from './components/icons';
import { useState } from "react";

const itemArray=new Array(9).fill("empty");

const App = ()=> {

    const [isCross,setIsCross]=useState("false");
    const [winMessage,setWinMessage]=useState("");

    const reloadGame=()=>{
        setIsCross("false");
        setWinMessage("");
        itemArray.fill("empty",0,9);
    }

    const checkIsWinner=()=>{
        if(itemArray[0]!=="empty"&& itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2]){
            {setWinMessage(`${itemArray[0]} wins`)}
        }
        else if(itemArray[3]!=="empty"&& itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5]){
            {setWinMessage(`${itemArray[3]} wins`)}
        }
        else if(itemArray[6]!=="empty"&& itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8]){
            {setWinMessage(`${itemArray[6]} wins`)}
        }
        else if(itemArray[0]!=="empty"&& itemArray[0]===itemArray[4] && itemArray[0]===itemArray[7]){
            {setWinMessage(`${itemArray[0]} wins`)}
        }
        else if(itemArray[3]!=="empty"&& itemArray[3]===itemArray[4] && itemArray[3]===itemArray[6]){
            {setWinMessage(`${itemArray[3]} wins`)}
        }
    }

    const changeItem=itemNumber =>{
       if(winMessage){
        return toast("win message",{type:"success"})
       }
       else{
        if(itemArray[itemNumber]==="empty"){
            itemArray[itemNumber]=  isCross ?  "cross" : "circle";
            setIsCross(!isCross);
        }
        else{
            return toast("Already Filled",{type:"error"});
        }
       }
       checkIsWinner();
    }

  return (
    <>
    <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
            <Col md={6} className="offset-md-3">
                {winMessage ? (
                    <div className="mb-2 mt-2">
                        <h1 className="text-danger text-uppercase text-center">{winMessage}</h1>
                        <Button color="danger" block onClick={reloadGame} >Reload The Game</Button>
                    </div>
                ) : (
                    <h1 className="text-center text-warning">
                        {isCross ? "Cross"  : "Circle" } turns
                        </h1>
                ) }
                <div className="grid">
                    {itemArray.map((item,index)=>(
                        <Card onClick={()=> changeItem(index) }>
                            <CardBody className="box">
                                <Icons name={item} />
                            </CardBody>
                        </Card> 
                    ))}
                </div>
            </Col>
            </Row>
    </Container>
    </>
  );
}

export default App;
