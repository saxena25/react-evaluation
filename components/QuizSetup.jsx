// import React from 'react'
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";

function QuizSetup() {
  
  const {formState,setFormState} = useContext(AuthContext);


  const navigate = useNavigate()

  const handleChange = (e) =>{
    const value = e.target.value;
    
    setFormState({
      ...formState,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let obj = {
      id: Date.now(),
      ...formState
    }
    setFormState(obj);
    console.log(formState);
    if(formState.name !== ""){
      navigate('/quiz');
    }else{
      alert("!Please Fill the Form First")
    }
  }

  return (
    <>
      <div className="quiz-setup">
        <h2>Set up your Quiz</h2>
        <form>
          <input type="text" placeholder='Enter Your Name' name="name" id='name' onChange={handleChange} required />
          <select name="category" id="" onChange={handleChange} required>
            <option value="#">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
          </select>
          <select name="difficulty" id="" onChange={handleChange} required>
            <option value="#">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input type="number" name="question" id="question" placeholder="Choose Number of Questions" onChange={handleChange} required />
          {/* <input type="submit" value="Start Quiz" onClick={()=>navigate("/quiz")}/> */}
          <button type="submit"  onClick={handleSubmit}>Start Quiz</button>
        </form>
      </div>
    </>
  )
}

export default QuizSetup
