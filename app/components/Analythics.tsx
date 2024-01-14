export default function Analythics() {
  return (
    <div className="h-10 text-sm flex items-center justify-between px-4 text-darkGrayishBlue bg-veryLightGray shadow-lg shadow-darkGrayishBlue/30">
      <p>5 items left</p>
      <ul className="flex gap-2">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <p>Clear Completed</p>
    </div>
  );
}
