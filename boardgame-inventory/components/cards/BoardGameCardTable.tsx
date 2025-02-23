interface BoardGameCardTableProps {
  icon: React.ReactNode;
  label: string;
  backgroundColor: string;
}

export const BoardGameCardTable = ({
  icon,
  label,
  backgroundColor,
}: BoardGameCardTableProps) => {
  return (
    <li
      className="px-3 py-0.5 rounded-full gap-2 flex flex-row items-center text-white text-sm"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {icon}
      <div className="text-lg">{label}</div>
    </li>
  );
};
