import Link from "next/link";

function LargeButton({ url, value }) {
  return (
    <div className="hover:scale-110 py-8 bg-nord1 hover:bg-nord2 duration-200 ease-in-out rounded-2xl">
      <Link className="" href={url}>
        <a className="p-8">{value}</a>
      </Link>
    </div>
  );
}

export default LargeButton;
