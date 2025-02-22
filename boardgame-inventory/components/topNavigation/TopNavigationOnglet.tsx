interface TopNavigationOngletProps {
  label: string;
  href: string;
}

export const TopNavigationOnglet = ({
  label,
  href,
}: TopNavigationOngletProps) => {
  return (
    <li className="flex items-center mr-7">
      <a
        className="p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white"
        href={href}
      >
        {label}
      </a>
    </li>
  );
};
