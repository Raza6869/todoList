import Analythics from "./Analythics";
import Dobox from "./Dobox";

export default function List() {
  return (
    <ul className="mt-6 flex flex-col gap-1">
      <li>
        <Dobox title="Jog around the park 3x" />
      </li>
      <li>
        <Dobox title="Jog around the park 3x" />
      </li>
      <li>
        <Dobox title="Jog around the park 3x" />
      </li>
      <li>
        <Dobox title="Jog around the park 3x" />
      </li>
      <li>
        <Dobox title="Jog around the park 3x" />
      </li>
      <li>
        <Dobox title="Jog around the park 3x" />
      </li>
      <Analythics />
    </ul>
  );
}
