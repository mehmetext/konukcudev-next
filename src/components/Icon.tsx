import { forwardRef } from "react";

//Types
type Props = {
  className?: string;
  name: string;
};

//36, 48, 72
//4xl, 5xl, 7xl

const Icon = forwardRef<HTMLDivElement, Props>(function (
  { className, name },
  ref
) {
  return (
    <div ref={ref} className={className}>
      <img
        className="w-full h-full"
        src={`images/icons/${name}.svg`}
        alt={name}
      />
    </div>
  );
});

export default Icon;
