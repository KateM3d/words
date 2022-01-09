import Topic from "./Topic";
import Flashcard from "./Flashcard";

export default function CategoryContainer() {
  return (
    <>
      <div className="containerFlashcard">
        <Flashcard />
      </div>
      <div className="containerRow">
        <Topic />
      </div>
    </>
  );
}
