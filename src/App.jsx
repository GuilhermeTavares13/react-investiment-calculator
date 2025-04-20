import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import './index.css'
import {useState} from "react";


function App() {

    const [userInput,setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            }
        });
    }


    return (
      <>
          <Header />
          <UserInput onChange={handleChange}/>
      </>
  )
}

export default App
