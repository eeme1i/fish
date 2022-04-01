import Link from "next/link";

function LargeButton({ url, value }) {
  return (
    <div className="flex justify-center hover:scale-110 bg-nord1 hover:bg-nord2 duration-200 ease-in-out rounded-2xl">
      <Link className="" href={url}>
        <a className="px-8 py-4">{value}</a>
      </Link>
    </div>
  );
}

export default LargeButton;
