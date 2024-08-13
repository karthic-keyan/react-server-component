import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [content, setContent] = useState("Loading..."); // Initially display loading message

  useEffect(() => {
    fetch("http://localhost:3001/") // Make sure this matches your server's URL and port
      .then((res) => res.text()) // Convert the response to text
      .then((htmlContent) => {
        setContent(htmlContent); // Store the HTML content in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setContent("Error loading data"); // Display error message if fetch fails
      });
  }, []);

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default App;
