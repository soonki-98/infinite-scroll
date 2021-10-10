import { useEffect, useState } from "react";
import Container from "./components/Container";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    }).then(() => {
      setTimeout(() => setIsLoading(false), 2000);
    });
  }, []);
  return <Container isLoading={isLoading} />;
}

export default App;
