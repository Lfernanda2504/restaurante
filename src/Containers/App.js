
import axios from 'axios';
import { useEffect, useState } from 'react';
import Login from '../Components/Login';


 

function App() {
  const [listMeal, setListMeal] = useState([])
  const api_key = '17c636d05bb44e9da78d8ffb40845849';


  useEffect(() => {
    axios.get(`https://api.spoonacular.com/food/menuItems/search?query=all&number=25&apiKey=${api_key}`)
      .then(response => {
        setListMeal(response.data);
      })
  }, [])
  
    

  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
