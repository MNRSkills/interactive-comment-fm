import CommentBar from "./components/comments";
import SingleComment from "./components/singleComment";

function App() {
  return (
    <div className='App container bg-gray-800 h-screen '>
      <CommentBar />
      <SingleComment />
    </div>
  );
}

export default App;
