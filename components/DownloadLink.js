import Link from "next/link";

export default function DownLoadLink({ url, text }) {
  return (
    <div
      className="w-48 mx-auto
                  transition ease-in-out hover:scale-110
                  hover:cursor-pointer 
                  text-2xl text-nord4 bg-nord1"
    >
      <div className="p-1">
        <Link href={url} passHref={true}>
          <div className="flex bg-nord2 p-2">
            <a className="pl-1">{text}</a>
            <div>
              <svg
                className="w-8 ml-4 pt-1"
                viewBox="0 0 41 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 30L29.1603 15L11.8397 15L20.5 30ZM19 0L19 16.5H22L22 0L19 0Z"
                  fill="#E5E9F0"
                />
                <path
                  d="M20.5 37H5.5C0.5 37 0.5 37 0.5 32V22H5.5V32H20.5H28H35.5V22H40.5V32C40.5 37 40.5 37 35.5 37H20.5Z"
                  stroke="#E5E9F0"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
