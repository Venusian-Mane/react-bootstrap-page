import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Row className='px-4 my-5'>
            <Col sm={7}>
              <Image src='https://picsum.photos/900/400' fluid rounded />
            </Col>
            <Col sm={5}>
              <h1 className='font-weight-light text-left'>Tagline</h1>
              <p className='mt-4'>
                This is a template that is great for small businesses. It does
                not have too much flare to it but it makes good use of the
                standard React Bootstrap core components. Fell free to imagine
                the face of your business on this template
              </p>
              <Button variant='outline-primary'>Call To Action</Button>
            </Col>
          </Row>
          <Row>
            <Card className='text-center bg-secondary text-white my-5 py-4'>
              <Card.Body className='bg-secondary text-justify'>
                <Card.Text>
                  This call to action is a great place to showcase impotant
                  information or display a clever tagline.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='https://picsum.photos/200/175' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='https://picsum.photos/200/175' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='https://picsum.photos/200/175' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
