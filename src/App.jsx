import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
//Importing the some router from "react-router-dom" for SPA(Single Page Applicatioin)

function App() {
//BrowserRouter is the main Router inside this we have to use the Routes. Inside this Routes we have to initilaize the Route path and element means if we click the link which route will going to open. Path is to give the path for the route. element must have the component inside it
//But the thing is it is not a single page application.Each time if we change the router and press the enter the page will rerender(loading each time ) . But we are building a single page application , we have to avoid this . to avoid this problem we have use another 
  return (
    
     <div>
      {/* It will be there for all the routes no matter which route we are in Just as an header */}
      {/*To navigate the user from one page to another following is the dumb way*/}
      {/* <a href="/">Allen</a> 
      |
       <a href="/jee/online-coaching-class-11">Class11</a> 
      |
      <a href="/jee/online-coaching-class-12">Class12</a> */}
      {/* But the problem is if we change the page from one route to another it will re-render all the dom again and again means A loader will appear . Which means our website is re fecthing all the things */}
      {/* to overcome this we have to export the Link from the "react-router-dom" . Instead of using anchore we have to use the Link. following approach is the correct way for change the route form one to another without re-fetching the entire HTML and JS */}
      
      <BrowserRouter>
      {/* we have to use the Link inside the BrowserRouter */}
      <Link to="/">Allen</Link> 
      |
       <Link to="/jee/online-coaching-class-11">Class11</Link> 
      |
      <Link to="/jee/online-coaching-class-12">Class12</Link>
    <Routes>
      <Route path = "/jee/online-coaching-class-11" element = {<Class11Program/>}/>
      <Route path = "/jee/online-coaching-class-12" element = {<Class12Program/>}/>
      <Route path = "/" element = {<LandingPage/>}/>
      {/* to Intriduce the defalut 404 page we have to use make change for the route as following (someone by mistakely enter the wrong router to this page) */}
      <Route path="*" element = {<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
     </div>
    
  )
}
//Default Error page 404 
function ErrorPage(){
  return(
    <h1>Error page 404</h1>
  )
}

function LandingPage(){
  return(
    <div>
      Landing Page for coaching
    </div>
  )
}

function Class11Program(){
  return(
    <div>
      JEE program for class 11th students
    </div>
  )
}

//Using useNavigate hook we can change the router from one to another. Eg

function Class12Program(){
  const naviage = useNavigate();
  //useNavigate hook will return the navigate in which we have to add the router link 
  function redirectLand(){

    naviage("/");
  }
  return(
    <div>
      <button onClick={redirectLand}>Redirect to the landing page</button>
      JEE program for class 12th students
    </div>
  )
}



export default App;
