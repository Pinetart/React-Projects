import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RequestList.css";

import editIcon from "../assets/Edit-Icon.png";
import deleteIcon from "../assets/Delete-Icon.png";

const Requestlist = ({ requests }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const headers = ["Requestor", "Title", "Status", "Priority", "Date"];

  return (
    <div>
      {requests.map((request) => (
        <div className="request-preview" key={request.id}>
          <Link to={`/requests/${request.id}`}>
            <h2>{request.description}</h2>
            <p>Written by {request.author}</p>
          </Link>
          <div className="actions">
            <img src={editIcon} alt="add request" />
            <img src={deleteIcon} alt="add request" />
          </div>
          {/* {!isLoading && (
            <button
              onClick={(e) => {
                fetch(`http://localhost:8000/requests/${request.id}`, {
                  method: "DELETE",
                }).then(() => {
                  history.go(0);
                  setIsLoading(false);
                });
              }}
            >
              Delete Request
            </button>
          )}
          {isLoading && (
            <button style={{ pointerEvents: "none" }}>
              Deleting Request..
            </button>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Requestlist;
