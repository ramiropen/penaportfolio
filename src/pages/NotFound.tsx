import { Link } from "react-router-dom";
// importing styles directly into tsx file!
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default function NotFound() {
  return (
    <div className="notFoundWrapper">
      <div className="notFoundOverlay">
        <h2 className="notFoundH">Uh Oh 404!</h2>
        <Card.Text className="nFoundText">
          Looks like Mufasa has some explaining to do. Let's try again.
        </Card.Text>
        <button className="homeButton">
          <Link className="notLink" to="/">
            Return Home
          </Link>
        </button>
      </div>
    </div>
  );
}
