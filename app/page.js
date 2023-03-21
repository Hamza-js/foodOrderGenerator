import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <div className="innerContainer">
        <div className="mt-6 mx-5">
          <Link href={`/requirements`}>
            <button className="button">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
