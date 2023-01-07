import React, { useEffect, useState } from "react";
import { getMyContent } from "../../api/admin";

export default function Home() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getMyContent()
      .then((request) => {
        console.log("request : ", request);

        setContents(request.data.data);
      })
      .catch((error) => console.log("error : ", error));
  }, []);

  return (
    <div>
      Home
      {contents.map((content, idx) => (
        <p key={idx}> {content.content}</p>
      ))}
    </div>
  );
}
