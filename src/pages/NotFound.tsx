import { Link } from "react-router-dom"; 
// importing styles directly into tsx file!
import "../assets/CSS/style.css";
import '../images/404BG.jpg';

export default function NotFound() {
  return (  
    <div className="notFoundWrapper">
      <div className="bgNotFound">
        <img src="new-portfolio\src\images\404BG.jpg" alt="" className="" />
      </div>
      <div className="notFoundP">
        
        <h2>Uh Oh!</h2>
        <p>Looks like Simba has some explaining to do because something is not adding up. Lets try again.</p>
        <Link className="404link" to = '/'>Return to Home Page</Link>
      </div>
    </div>
  );
}
