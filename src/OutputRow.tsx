export const OutputRow = ({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) => {
  return (
    <p className="mx-4 flex justify-between text-sm">
      <span className="text-white">
        {title} <span className="text-grey-500 block text-xs">/ person</span>
      </span>
      <span className="text-2xl text-green-400">${amount.toFixed(2)}</span>
    </p>
  );
};
