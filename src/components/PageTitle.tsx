import ComponentNameContainer from "@/components/ComponentNameContainer";
import Container from "@/components/Container";
import React from "react";

export default function PageTitle({
  componentName,
  title,
  subtitle,
  centerHeading = false,
}: {
  componentName: string;
  title: string;
  subtitle?: string;
  centerHeading?: boolean;
}) {
  return (
    <Container>
      <ComponentNameContainer name={componentName}>
        <div
          className={`flex flex-col gap-2 w-full ${
            centerHeading ? "text-center" : ""
          }`}
        >
          <h1 className="text-primary-dark font-black text-3xl sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="text-[#636363]">{subtitle}</p>}
        </div>
      </ComponentNameContainer>
    </Container>
  );
}
