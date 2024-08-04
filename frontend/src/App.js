import logo from './logo.svg';
import  Header from './components/Header';
import  Footer from './components/Footer';
import {  Container} from 'react-bootstrap'
import {  BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <Router >
      <Header />
      <Container >
        <Routes>
        <Route path='/' Component={Homescreen} exact/>
        <Route path='/product/:id' Component={ProductScreen} exact/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
