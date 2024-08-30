import { useState } from "react";

//import "./App.css"
function App() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addactivity() {
    setlistData([...listData, activity]);
    setActivity("");
  }
  function removeactivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }
  return (
    <>
      <div className="container w-7/12 h-96  bg-red-600  relative left-72 top-24 ">
        <div className="heading text-xl text-center">Todo App</div>
        <input
          type="text"
          placeholder="Add Activity"
          className=" relative left-80 rounded-md top-2"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <div>
          <button
            className="text-2xl rounded-md bg-amber-500 relative left-96 top-5"
            onClick={addactivity}
          >
            Add
          </button>
        </div>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData text-lg text-left ">{data}</div>
                  <div className="btn-position w-14 bg-green-700">
                    <button onClick={() => removeactivity(i)}>remove</button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
