import Link from 'next/link';

function Breadcrumb() {
  return (
    <div className="absolute top-4 left-4">
      <Link
        href="/"
        className="text-white text-lg flex items-center gap-2 hover:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6l-6 6m0 0l6 6m-6-6h15"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Breadcrumb;
