import React, { useEffect } from "react";

function Contacts() {

  useEffect(() => {
    window.location.href = "https://openlibrary.org/";
  }, []);

  return (
    <div>
      <h2>Directing...</h2>
    </div>
  );
}

export default Contacts;