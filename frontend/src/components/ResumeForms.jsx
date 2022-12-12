import { Link } from "react-router-dom";

export default function ResumeForms() {
  return (
    <>
      <div className="heading">
        <h1 className="heading">
          <Link to="/experience" className="heading">
            Experience Form
          </Link>
        </h1>
      </div>
      <div>
        <h1 className="heading">
          <Link to="/personal">Personal Form</Link>
        </h1>
      </div>
      <div>
        <h1 className="heading">
          <Link to="/education">Education Form</Link>
        </h1>
      </div>
      <div>
        <h1 className="heading">
          <Link to="/extra">Extras Form</Link>
        </h1>
      </div>
    </>
  );
}
