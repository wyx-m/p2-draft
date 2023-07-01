import Navbar from '../components/Navbar';
import Caeousels from "../components/Carousels"
import Container from 'react-bootstrap/Container';
import Navbar2 from '../components/Navbar2';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';


function Product(){
    return(
        <div>
            <div><Navbar/></div>
            <div><Navbar2/></div>
           <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 mt-5 me-3">
                <Card> 
                    <Card.Img variant="top" src="/" alt="album picture"  style={{height:"500px"}}/>
                    <Card.Footer>
                    <CardGroup>
                        <Card style={{margin:"5px"}}>
                            <Card.Img src="/" alt="detail1" style={{height:"70px"} }></Card.Img>
                        </Card>
                        <Card style={{margin:"5px"}}>
                            <Card.Img src="/" alt="detail1" style={{height:"70px"}}></Card.Img>
                        </Card>
                        <Card style={{margin:"5px"}}>
                            <Card.Img src="/" alt="detail1" style={{height:"70px"}}></Card.Img>
                        </Card>
                        <Card style={{margin:"5px"}}>
                            <Card.Img src="/" alt="detail1" style={{height:"70px"}}></Card.Img>
                        </Card>
                    </CardGroup>
                    </Card.Footer>
                   
                </Card>
                </div>

                <div className="col-4 m-5">
                    <h1 className='mb-5'>Ablum Name</h1>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <Button style={{width:"400px", backgroundColor:"#fff", color:"black"}}>Add to cart</Button>
                    <p>description</p>
                </div>
               
            </div>

            <div className="container m-5" style={{backgroundColor:" rgb(223, 230, 234)"}}>
                <h1>Customer Review Section</h1>
            </div>
                
           
           </div>
            
           
        </div>
        
    )
}

export default Product;