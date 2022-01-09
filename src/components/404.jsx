import image from "../assets/404.jpg";

export default function Mistake() {
  return (
    <>
      <div className="mistake">
        <img className="mistakeImg" src={image} alt="not found" />
      </div>
    </>
  );
}
