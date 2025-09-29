import { educationContent } from "../constants";

const Education = () => {
  return (
    <section className="c-space my-20" id="education">
      <h2 className="head-text">Education</h2>
      <div className="mt-12 flex flex-col gap-8">
        {educationContent.map(({
          id,
          institution,
          logo,
          degree,
          timeframe,
          details,
          courses,
          coursesLabel,
          involvement,
        }) => (
          <article
            key={id}
            className="border border-black-300 bg-black-200 rounded-lg p-6 sm:p-8 flex flex-col gap-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black-300 border border-black-500 flex justify-center items-center overflow-hidden">
                  <img src={logo} alt={`${institution} logo`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                </div>
                <div>
                  <p className="text-white text-xl sm:text-2xl font-semibold">{degree}</p>
                  <p className="text-white-500 text-base sm:text-lg">{institution}</p>
                </div>
              </div>
              <p className="text-white-500 text-sm sm:text-base lg:text-right">{timeframe}</p>
            </div>
            {details?.length ? (
              <ul className="list-disc list-inside text-white-500 space-y-1">
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
            {courses?.length ? (
              <div className="flex flex-col gap-3">
                {coursesLabel ? (
                  <p className="text-white text-sm sm:text-base font-medium">
                    {coursesLabel}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs sm:text-sm rounded-full border border-black-500 bg-black-300 text-white-500"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {involvement?.length ? (
              <div className="grid md:grid-cols-2 gap-4">
                {involvement.map(({ title, timeframe: highlightTimeframe, logo: highlightLogo }) => (
                  <div
                    key={`${title}-${highlightTimeframe || "highlight"}`}
                    className="flex items-center gap-3 border border-black-500 bg-black-300 rounded-lg px-4 py-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-black-600 flex justify-center items-center overflow-hidden">
                      <img src={highlightLogo} alt={title} className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm sm:text-base font-medium">{title}</p>
                      {highlightTimeframe ? (
                        <p className="text-white-500 text-xs sm:text-sm">{highlightTimeframe}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
