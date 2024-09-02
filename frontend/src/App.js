import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        {/* <Route path="/products" element={<h1>Product Listing component</h1>}/> */}
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/logout" element={<h1> Logout</h1>}/>
        <Route path="/profile" element={<h1>Profile component</h1>}/>

        </Route>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}
export default App;
