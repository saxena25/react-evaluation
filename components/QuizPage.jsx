import axios from "axios";
import { useContext, useEffect,useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const [data,setData] = useState([]);

  const {formState} = useContext(AuthContext);

  const navigate = useNavigate();

  // console.log(formState);
  
  
  
  const fetchData = async () =>{
    try {
      let res = await axios.get(`https://opentdb.com/api.php?amount=${formState.question}&category=${formState.category}&difficulty=${formState.difficulty}&type=multiple`);
      // console.log(res.data);
      console.log(res.data.results);
      setData(res.data.results);
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
    }
  }

  // const changeQuestions = () =>{

  // }

  const handleSubmit = () =>{

  }

useEffect(() => {
  fetchData();
}, []);
  return (
    <>
      <div className="quiz">
        <h2>Quiz Page</h2>
        {formState.name !== "" && (<h1>Hello {formState.name}</h1>)}
        {
          data.map((e,index)=>(
            <div className="card" key={e.question}>
              <h3>{e.question}</h3>
              {e.incorrect_answers.map((ans,index)=>(
                <label htmlFor="ans" key={index}>
                  <input type="radio" name="" value={ans} id="ans"  />
                  {ans}
                </label>
                
              ))}
              <label htmlFor="correct-ans">
                <input type="radio" name="correct-ans" id="" value={e.correct_answer} />
                {e.correct_answer}
              </label>
            </div>
          ))
        }
        
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
        <button onClick={()=>navigate("/")}>Go back to Home Page</button>
      </div>
    </>
  )
}

export default QuizPage
