import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <h1 className="title">Eisenhower Matrix : To Do List</h1>
      <div className="QuadrantWrapper">
        <div className="TodoWrapper">
          <div className="line-container">
            <h6 className="hower">DO IT FIRST</h6>
            <small className="smaller">Do these things as soon as possible</small>
          </div>
          <TodoWrapper />
        </div>
        <div className="TodoWrapper">
          <div className="line-container">
            <h6 className="hower">SCHEDULE IT</h6>
            <small className="smaller">Schedule a time to do these things</small>
          </div>
          <TodoWrapper />
        </div>
        <div className="TodoWrapper">
          <div className="line-container">
            <h6 className="hower">DELEGATE IT</h6>
            <small className="smaller">Find someone who can do these for you</small>
          </div>
          <TodoWrapper />
        </div>
        <div className="TodoWrapper">
          <div className="line-container">
            <h6 className="hower">DELETE IT</h6>
            <small className="smaller">Just avoid doing these things</small>
          </div>
          <TodoWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
