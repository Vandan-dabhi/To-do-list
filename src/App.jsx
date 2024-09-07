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
    
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4" >
        <div className="w-full sm:w-3/4 lg:w-1/2 bg-red-600 p-6 rounded-lg shadow-lg">
        <div className="heading text-xl sm:text-2xl lg:text-3xl text-center text-white ">Todo App</div>
        <div className="mt-4">
        <input
          type="text"
          placeholder="Add Activity"
          className=" w-full p-2 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400  "
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        </div>

        <div className="mt-4 flex justify-center">
          <button
            className=" bg-amber-500 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            onClick={addactivity}
          >
            Add
          </button>
        </div>
        <div className="mt-6">
        {listData.length > 0 &&
          listData.map((data, i) => (
            <div
              
                key={i}
                className="flex justify-between items-center p-2 bg-gray-200 mt-2 rounded-lg shadow"
                >
                  <p className="listData text-lg text-gray-800 ">{data}</p>
                  
                    <button onClick={() => removeactivity(i)} className="btn-position bg-green-700 text-white px-4 py-1 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 ">remove</button>
                  </div>
          ))}
          </div>    
            </div>
          </div>
      );
    
  
}

export default App;
