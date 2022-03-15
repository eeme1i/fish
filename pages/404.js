import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex w-screen justify-center h-screen items-center">
        <Link href="/home">
          <a>
            <img src="/logo.png" />
          </a>
        </Link>
      </div>
    </div>
  );
}
