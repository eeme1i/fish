import Link from "next/link";

function FooterItem({ url, value }) {
  return (
    <div className="flex text-nord4 px-2 py-2">
      <Link href={url}>
        <a className="px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3">
          {value}
        </a>
      </Link>
    </div>
  );
}

export default FooterItem;
