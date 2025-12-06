import React from "react";
import CornerDeco from "../commons/CornerDeco";

export default function ProjectListItems({ project }) {
  return (
    <div className="bg-custom-red h-full max-h-full rounded-xl p-2 sm:aspect-square">
      <div className="bg-custom-gray flex h-full flex-col gap-4 rounded-3xl p-3 text-white">
        <div
          style={{
            backgroundImage: `url(/images/img-projet/${project.images[0]})`,
          }}
          className={
            "aspect-video w-full rounded-2xl bg-cover bg-center bg-no-repeat sm:aspect-auto sm:h-[50%]"
          }
        ></div>

        <CardDescription
          role={project.role}
          date={project.date}
          title={project.title}
          description={project.description}
          languages={project.languages}
          link={project.link}
        />
      </div>
    </div>
  );
}

const CardDescription = ({
  role,
  title,
  description,
  date,
  languages,
  link,
}) => {
  return (
    <div className="relative flex flex-1 flex-col justify-between rounded-2xl">
      <div>
        <p>
          {role} | {date}
        </p>
        <h1 className="font-family-title text-2xl font-bold">{title}</h1>
        {/* <p>{description}</p> */}
      </div>
      <div className="bg-custom-red absolute right-0 bottom-0 flex flex-col gap-0.5 rounded-lg p-1">
        {languages.map((image, index) => (
          <img
            key={index}
            className="bg-custom-darkred size-11 rounded-xl p-2"
            src={`/src/asset/icons/lang/${image}`}
            alt={`Language projet ${index}`}
          />
        ))}
      </div>
      <a href={link} className="flex w-fit items-center gap-2" target="_blank">
        <img
          src="/src/asset/icons/tools/github.svg"
          className="size-8"
          alt="Github logo"
        />
        GitHub
        <img
          src="/src/asset/icons/other/arrow_link.svg"
          className="size-6"
          alt="arrow link"
        />
      </a>
    </div>
  );
};
