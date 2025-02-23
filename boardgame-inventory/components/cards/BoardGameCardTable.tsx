import classNames from "classnames";

interface BoardGameCardTableProps {
  icon: React.ReactNode;
  label: string;
  className: string;
}

export const BoardGameCardTable = ({
  icon,
  label,
  className,
}: BoardGameCardTableProps) => {
  return (
    <li
      className={classNames(
        "px-3 py-0.5 rounded-full gap-2 flex flex-row items-center text-white text-sm",
        className
      )}
    >
      {icon}
      <div className="text-lg">{label}</div>
    </li>
  );
};
