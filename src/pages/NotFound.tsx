import { Link } from "react-router-dom"; 
// importing styles directly into tsx file!
import "../assets/CSS/style.css";


export default function NotFound() {
  return (  
    <div className="notFoundWrapper">
      {/* background image */}
      <div className="bgNotFound">
        <img src="new-portfolio\src\images\404BG.jpg" alt="" className="" />
      </div>
      {/* return home button */}
     <div className="notFoundP">
      <h2> Uh Oh 404!</h2>
      <p>Looks Like Mufasa has some explaining to do. Lets try again.</p>
      <button className="homeButton">
        <Link className="notLink" to = '/'>Return Home</Link>
      </button>
     </div>
      {/* Figure out how to upload player using typescript!!!!!!!!!!!!!! */}
       {/* <div className="notPlayer">
        <audio controls autoPlay preload="metadata">
        <source src="src\audio\uplifting-africa.mp3" type="audio/mpeg"/>
        </audio>
      </div>  */}
    </div>
  );
}


