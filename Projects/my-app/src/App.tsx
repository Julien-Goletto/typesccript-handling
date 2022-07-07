import React, { useState, useRef, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      title: "Picasso",
      content: "Est un vieux gars toxique et chauve",
    },
    {
      id: 2,
      title: "Van Gogh",
      content: "Mec triste qui meurt à la fin",
    },
  ]);
  const btnRef = useRef<HTMLButtonElement>(null);
  console.log(btnRef);
  useEffect( () => {
    const handleResize = (e: Event) => {
      console.log('Resized !', e)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])
  return (
    <>
      <div className="App">
        {cardsData.map(({id, title, content}) => <Card key={id} title={title} content={content} />)}
      </div>
      <button ref={btnRef}>Submit</button>
    </>
  );
}

export default App;
