import loader from "../assets/loader.gif";

export default function Loader() {
  return (
    <>
      <img className="loader" src={loader} alt="please wait..." />
    </>
  );
}
