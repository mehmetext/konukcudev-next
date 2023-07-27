type Props = {
  month?: string;
  year: string;
};

export default function DateLineBlockDate({ month, year }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {month && <span className="text-sm font-bold -mb-1.5">{month}</span>}
      <span className="text-[12px] font-bold">{year}</span>
    </div>
  );
}
