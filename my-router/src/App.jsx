import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT  = 'pushstate';

function navigate(href){
window.history.pushState({},'', "href");
const navigateEvent = new Event('pushstate') 
window.dispatchEvent(navigateEvent)
}
function AboutPage(){
  <>
      <h1>About page</h1>
    <a href="/about">go to ABOUT page</a>
</>
}
function HomePage(){
  <>
      Home page
    <a href="/">got to home page</a>
</>
}

function App() {
  const[currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() =>{
    const onLocationChange = () =>{
      setCurrentPath(window.location.pathname);
    }
  })
 
 // window.addEventListener("pushstate",onLocationChange)
  //window.addEventListener("popState",onLocationChange)
  return (
    <main>
      {currentPath}
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App
