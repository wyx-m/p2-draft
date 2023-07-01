import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Cards.css"
import { Link } from 'react-router-dom';

function CardF() {
  return (
    
    <CardGroup>
      <Card className="crd">
        
        <Card.Body>
        <Card.Img variant="top" src="holder.js/100px160" />
          {/* <Card.Title>Products</Card.Title>
          <Card.Text>
            
          </Card.Text> */}
        </Card.Body>
        <Card.Footer className='text-center'><Link to="/eachproduct">Album1</Link></Card.Footer>
      </Card>
      <Card className="crd">
        <Card.Body>
        <Card.Img variant="top" src="holder.js/100px160" />
          {/* <Card.Title>Products</Card.Title>
          <Card.Text>
            
          </Card.Text> */}
        </Card.Body>
        <Card.Footer className='text-center'><Link to="/eachproduct">Album2</Link></Card.Footer>
      </Card>
      <Card className="crd">
      <Card.Body>
        <Card.Img variant="top" src="holder.js/100px160" />
          {/* <Card.Title>Products</Card.Title>
          <Card.Text>
            
          </Card.Text> */}
        </Card.Body>
        <Card.Footer className='text-center'><Link to="/eachproduct">Album3</Link></Card.Footer>
      </Card>
      <Card className="crd">
      <Card.Body>
        <Card.Img variant="top" src="holder.js/100px160" />
          {/* <Card.Title>Products</Card.Title>
          <Card.Text>
            
          </Card.Text> */}
        </Card.Body>
        <Card.Footer className='text-center'><Link to="/eachproduct">Album4</Link></Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardF;