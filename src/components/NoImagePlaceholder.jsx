export default function NoImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#7042f88b] to-[#7042f84d]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white opacity-60"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="ml-3 text-sm font-medium text-white opacity-60">
        No Image
      </span>
    </div>
  );
}

