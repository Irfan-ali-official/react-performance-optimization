import { useState } from "react";

function App() {
  const [count, setCount] = useState(1_0000); //if we put million it will break, but having underscore it won't break
  // if value it not used you can just add underscore in front of that variable
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 30;
  const windowHeight = 500;
  const innerHeight = count * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    Math.floor((scrollTop + windowHeight) / itemHeight),
    count
  );
  const items = Array.from({ length: count }, (_, i) => {
    return {
      index: i + 1,
      name: `Movie ${i + 1}`,
    };
  });
  function displayMovieItems() {
    const displayedItems = items.slice(startIndex, endIndex);
    // console.log({ displayedItems, startIndex, endIndex });
    const movieList = displayedItems.map((item) => {
      return (
        <div
          key={item.index}
          style={{
            height: itemHeight,
            position: "absolute",
            width: "100%",
            top: `${item.index * itemHeight}px`,
          }}
        >
          {item.name}
        </div>
      );
    });
    return movieList;
  }
  function onScroll(e) {
    // console.log(e.currentTarget.scrollTop);
    setScrollTop(e.currentTarget.scrollTop);
  }
  return (
    <div className="App">
      <h1 s>TODO</h1>
      <div
        className="outerbox"
        style={{
          border: "1px solid red",
          overflowY: "scroll",
          height: windowHeight,
          width: 300,
          margin: "0 auto",
        }}
        onScroll={onScroll}
      >
        <div
          className="innerbox"
          style={{
            height: innerHeight,
            position: "relative",
          }}
        >
          {displayMovieItems()}
        </div>
      </div>
    </div>
  );
}

export default App;
