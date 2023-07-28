import { ReactNode, useEffect, useRef, useState } from "react";

//Types
type Props = {
  header: (toggleIsOpen: Function, isOpen: boolean) => ReactNode;
  content: ReactNode;
};

export default function Accordion({ header, content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (contentRef?.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, screenWidth]);

  return (
    <>
      {header(toggleIsOpen, isOpen)}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-y-auto transition-all duration-300"
      >
        {content}
      </div>
    </>
  );
}
