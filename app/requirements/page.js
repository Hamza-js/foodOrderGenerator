import Link from "next/link";

export default function Requirments() {
  return (
    <div className="main">
      <div className="innerContainer px-5">
        <h2 className="heading">Input Requirements</h2>
        <p className="text">Either enter Calories required or Proteins Required or BOTH</p>
        <div>
          <p className="label">Calories</p>
          <input className="input" placeholder="Enter Calories"/>
        </div>
        <div>
          <p className="label">Protien</p>
          <input className="input" placeholder="Enter"/>
        </div>

        <Link href={'/selectCategory'}>
          <button className="button mt-7" >Next</button>
        </Link>
      </div>
    </div>
  );
}
