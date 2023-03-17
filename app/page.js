import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <div className="innerContainer">
        <Link href={`/requirements`}>
          <button className="button">Order Now</button>
        </Link>
      </div>
    </div>
  );
}
