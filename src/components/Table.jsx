import { useContext } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { APIContext } from "../Context/apiContext";

export default function CreateTopicTable() {
  const { words } = useContext(APIContext);

  return (
    <div className="containerTable">
      <TableHeader />
      {words.map((inner) => (
        <TableRow
          key={inner.id}
          id={inner.id}
          english={inner.english}
          transcription={inner.transcription}
          french={inner.french}
        />
      ))}
    </div>
  );
}
