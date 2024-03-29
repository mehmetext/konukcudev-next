"use client";

//Icons
import { FiInfo } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbLink } from "react-icons/tb";
import { BiGitRepoForked } from "react-icons/bi";
import { BsImage } from "react-icons/bs";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Accordion from "@/components/Accordion";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";

//Types
type Props = {
  reference: {
    image: string;
    name: string;
    technologies: string[];
    content?: string;
    repoLink?: string;
    link?: string;
  };
};

export default function ReferenceItem({ reference }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="md:break-inside-avoid rounded-lg overflow-hidden flex border border-bright relative"
    >
      <img
        src={`/images/${reference.image}`}
        alt={reference.name}
        className="w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-end">
        <div className="bg-bright flex flex-col w-full max-h-full overflow-y-scroll">
          <Accordion
            header={(toggleIsOpen, isOpen) => {
              return (
                <div className="flex justify-between items-center gap-2.5 p-2.5">
                  <div className="text-primary-dark font-black sm:text-xl flex items-center gap-1">
                    {reference.name}{" "}
                    {reference.link && (
                      <Link href={reference.link} target="_blank">
                        <TbLink className="text-primary" />
                      </Link>
                    )}
                  </div>
                  <div className="flex gap-2.5 text-custom-gray">
                    <Link href={`/images/${reference.image}`} target="_blank">
                      <BsImage />
                    </Link>
                    <div
                      className="cursor-pointer relative"
                      onClick={() => toggleIsOpen()}
                    >
                      <FiInfo
                        className={`transition duration-300 delay-300 ${
                          isOpen ? "scale-0" : "scale-100"
                        }`}
                      />
                      <AiOutlineCloseCircle
                        className={`transition duration-300 delay-300 absolute top-0 ${
                          isOpen ? "scale-100" : "scale-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            }}
            content={
              <div className="px-2.5 pb-2.5 flex flex-col gap-2.5 text-custom-gray text-sm">
                <TechStack
                  items={reference.technologies}
                  itemClassName="w-5 h-5"
                  gapClassName="gap-0.5"
                />
                {reference.repoLink && (
                  <div className="flex gap-2.5">
                    {reference.repoLink && (
                      <div className="flex items-center gap-x-0.5">
                        <BiGitRepoForked className="text-primary text-base" />{" "}
                        <Link
                          href={reference.repoLink}
                          className="text-sm font-semibold text-primary-dark"
                          target="_blank"
                        >
                          Repository
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                {reference.content && (
                  <article className="prose-sm prose-a:font-bold max-w-none min-w-0">
                    <ReactMarkdown linkTarget="_blank">
                      {reference.content}
                    </ReactMarkdown>
                  </article>
                )}
              </div>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
