import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Root() {
  const navigate = useNavigate();

  //   redirect to login page
  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div>
      <div>Root</div>
    </div>
  );
}

export default Root;
