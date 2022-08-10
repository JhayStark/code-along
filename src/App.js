import Header from "./components/Header";
import Button from "./components/Button"
import NavBar from "./components/NavBar";
import {Image} from "./components/Image"
function App(){
  return( 
    <div>
      <NavBar/>
      <Header/>
      <Button label="Add to cart"/>
      <Button label="Login"/>
      <Button label="Register"/>
      

      <Image/>
    </div>
  
  )
}

export default App