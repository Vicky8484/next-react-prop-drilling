import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-center bg-gray-200 py-3 cursor-pointer">
      <ul className="flex gap-4">
        <li className="hover:text-blue-500">
          <Link href="/"> main </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/basic"> basic </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/funktioner"> funktioner </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/data"> data </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
