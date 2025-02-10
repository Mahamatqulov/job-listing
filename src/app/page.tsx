// "use client";

// import { X } from "lucide-react";
// import { useEffect, useState } from "react";

// const JOBS = [
//   {
//     id: 1,
//     company: "Photosnap",
//     logo: "./photosnap.svg",
//     position: "Senior Frontend Developer",
//     postedAt: "1d ago",
//     contract: "Full Time",
//     location: "USA only",
//     skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
//     isNew: true,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     company: "Monoge",
//     logo: "./manage.svg",
//     position: "Fullstack Developer",
//     postedAt: "1d ago",
//     contract: "Part Time",
//     location: "Remote",
//     skills: ["Fullstack", "Midweight", "Python", "React"],
//     isNew: true,
//     isFeatured: true,
//   },
//   {
//     id: 3,
//     company: "Account",
//     logo: "./account.svg",
//     position: "Junior Frontend Developer",
//     postedAt: "2d ago",
//     contract: "Part Time",
//     location: "USA only",
//     skills: ["Frontend", "Junior", "Sass", "React", "JavaScript"],
//     isNew: true,
//     isFeatured: false,
//   },
//   {
//     id: 4,
//     company: "MyHome",
//     logo: "./myhome.svg",
//     position: "Junior Frontend Developer",
//     postedAt: "5d ago",
//     contract: "Contract",
//     location: "USA only",
//     skills: ["Frontend", "Junior", "CSS", "JavaScript"],
//     isNew: false,
//     isFeatured: false,
//   },
//   {
//     id: 5,
//     company: "Loop Studios",
//     logo: "./loop-studios.svg",
//     position: "Software Engineer",
//     postedAt: "1w ago",
//     contract: "Full Time",
//     location: "UK only",
//     skills: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
//     isNew: false,
//     isFeatured: false,
//   },
//   {
//     id: 6,
//     company: "Facelt",
//     logo: "./faceit.svg",
//     position: "Junior Frontend Developer",
//     postedAt: "2w ago",
//     contract: "Full Time",
//     location: "UK only",
//     skills: ["Beckend", "Junior", "Ruby", "RoR"],
//     isNew: false,
//     isFeatured: false,
//   },
//   {
//     id: 7,
//     company: "Shortly",
//     logo: "./shortly.svg",
//     position: "Junior Developer",
//     postedAt: "2w ago",
//     contract: "Full Time",
//     location: "Worldwide",
//     skills: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
//     isNew: false,
//     isFeatured: false,
//   },
//   {
//     id: 8,
//     company: "Insure",
//     logo: "./insure.svg",
//     position: "Junior Frontend Developer",
//     postedAt: "2w ago",
//     contract: "Full Time",
//     location: "Worldwide",
//     skills: ["Frontend", "Junior", "Vue", "Sass", "JavaScript"],
//     isNew: false,
//     isFeatured: false,
//   },
//   {
//     id: 9,
//     company: "Eyecam Co.",
//     logo: "./eyecam-co.svg",
//     position: "Full Stack Engineer",
//     postedAt: "3w ago",
//     contract: "Full Time",
//     location: "Worldwide",
//     skills: ["Fullstack", "Midweight", "Django", "JavaScript", "Python"],
//     isNew: false,
//     isFeatured: false,
//   },
//   {
//     id: 10,
//     company: "The Air Filter Company",
//     logo: "./the-air-filter-company.svg",
//     position: "Front-end Dev",
//     postedAt: "1m ago",
//     contract: "Part Time",
//     location: "Worldwide",
//     skills: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
//     isNew: false,
//     isFeatured: false,
//   },
// ];

// export default function JobBoard() {
//   const [filters, setFilters] = useState<string[]>([]);

//   useEffect(() => {
//     const savedFilters = JSON.parse(localStorage.getItem("filters") || "[]");
//     if (savedFilters.length) {
//       setFilters(savedFilters);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("filters", JSON.stringify(filters));
//   }, [filters]);

//   const addFilter = (filter: string) => {
//     setFilters((prev) => (prev.includes(filter) ? prev : [...prev, filter]));
//   };

//   const removeFilter = (filterToRemove: string) => {
//     setFilters((prev) => prev.filter((filter) => filter !== filterToRemove));
//   };

//   const clearFilters = () => {
//     setFilters([]);
//   };

//   const filteredJobs = JOBS.filter((job) =>
//     filters.length === 0
//       ? true
//       : filters.every((filter) => job.skills.includes(filter))
//   );

//   return (
//     <div className="min-h-screen bg-[#EFFAFA] from-teal-300 to-teal-400 p-4">
//       {filters.length > 0 && (
//         <div className="mx-auto max-w-4xl">
//           <div className="mb-6 flex items-center gap-2 rounded-lg bg-white p-4 shadow-lg">
//             <div className="flex flex-1 flex-wrap gap-2">
//               {filters.map((filter) => (
//                 <span
//                   key={filter}
//                   className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-gray-200"
//                 >
//                   {filter}
//                   <button
//                     className="ml-1 rounded-full hover:bg-gray-300 p-1"
//                     onClick={() => removeFilter(filter)}
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                 </span>
//               ))}
//             </div>
//             <button
//               className="px-4 py-2 text-sm font-semibold rounded bg-gray-200 hover:bg-gray-300"
//               onClick={clearFilters}
//             >
//               Clear
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="mx-auto max-w-4xl space-y-4">
//         {filteredJobs.map((job) => (
//           <JobCard key={job.id} {...job} onSkillClick={addFilter} />
//         ))}
//       </div>
//     </div>
//   );
// }

// interface JobCardProps {
//   company: string;
//   logo: string;
//   position: string;
//   postedAt: string;
//   contract: string;
//   location: string;
//   skills: string[];
//   isNew?: boolean;
//   isFeatured?: boolean;
//   onSkillClick: (skill: string) => void;
// }

// function JobCard({
//   company,
//   logo,
//   position,
//   postedAt,
//   contract,
//   location,
//   skills,
//   isNew,
//   isFeatured,
//   onSkillClick,
// }: JobCardProps) {
//   return (
//     <div className="relative flex flex-col gap-4 p-6 shadow-lg rounded-lg bg-white md:flex-row md:items-center">
//       {isFeatured && (
//         <div className="absolute left-0 top-0 h-full w-2 rounded-l-lg bg-teal-500" />
//       )}
//       <div className="h-[80px] w-[80px] flex-shrink-0">
//         <img
//           src={logo || "/placeholder.svg"}
//           alt={company}
//           className="rounded-full"
//         />
//       </div>
//       <div className="flex-1 border-b pb-4 md:border-b-0 md:pb-0">
//         <div className="flex items-center gap-2">
//           <span className="text-sm font-semibold text-teal-500">{company}</span>
//           <div className="flex gap-2">
//             {isNew && (
//               <span className="px-3 py-1 text-sm font-semibold rounded-full bg-teal-500 text-white">
//                 NEW!
//               </span>
//             )}
//             {isFeatured && (
//               <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-900 text-white">
//                 FEATURED
//               </span>
//             )}
//           </div>
//         </div>
//         <h3 className="my-2 text-lg font-bold hover:text-teal-500">
//           {position}
//         </h3>
//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <span>{postedAt}</span>
//           <span>•</span>
//           <span>{contract}</span>
//           <span>•</span>
//           <span>{location}</span>
//         </div>
//       </div>
//       <div className="flex flex-wrap items-center gap-2">
//         {skills.map((skill) => (
//           <button
//             key={skill}
//             className="cursor-pointer px-3 py-1 text-sm font-semibold rounded-md bg-teal-50 hover:bg-teal-500 hover:text-white"
//             onClick={() => onSkillClick(skill)}
//           >
//             {skill}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const API_URL = "https://json-api.uz/api/project/job/jobs";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("API-dan ma'lumot olinmadi!");

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const addFilter = (filter: string) => {
    setFilters((prev) => (prev.includes(filter) ? prev : [...prev, filter]));
  };

  const removeFilter = (filterToRemove: string) => {
    setFilters((prev) => prev.filter((filter) => filter !== filterToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter((job: any) =>
    filters.length === 0
      ? true
      : filters.every((filter) => job.skills.includes(filter))
  );

  return (
    <div className="min-h-screen bg-[#EFFAFA] from-teal-300 to-teal-400 p-4">
      {filters.length > 0 && (
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-2 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-1 flex-wrap gap-2">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-gray-200"
                >
                  {filter}
                  <button
                    className="ml-1 rounded-full hover:bg-gray-300 p-1"
                    onClick={() => removeFilter(filter)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
            <button
              className="px-4 py-2 text-sm font-semibold rounded bg-gray-200 hover:bg-gray-300"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-4xl space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">Yuklanmoqda...</p>
        ) : filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">
            Hech qanday ish topilmadi.
          </p>
        ) : (
          filteredJobs.map((job: any) => (
            <JobCard key={job.id} {...job} onSkillClick={addFilter} />
          ))
        )}
      </div>
    </div>
  );
}

interface JobCardProps {
  company: string;
  logo: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  skills: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  onSkillClick: (skill: string) => void;
}

function JobCard({
  company,
  logo,
  position,
  postedAt,
  contract,
  location,
  skills,
  isNew,
  isFeatured,
  onSkillClick,
}: JobCardProps) {
  return (
    <div className="relative flex flex-col gap-4 p-6 shadow-lg rounded-lg bg-white md:flex-row md:items-center">
      {isFeatured && (
        <div className="absolute left-0 top-0 h-full w-2 rounded-l-lg bg-teal-500" />
      )}
      <div className="h-[81px] w-[81px] flex-shrink-0">
        <img
          src={logo || "/placeholder.svg"}
          alt={company}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 border-b pb-4 md:border-b-0 md:pb-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-teal-500">{company}</span>
          <div className="flex gap-2">
            {isNew && (
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-teal-500 text-white">
                NEW!
              </span>
            )}
            {isFeatured && (
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-900 text-white">
                FEATURED
              </span>
            )}
          </div>
        </div>
        <h3 className="my-2 text-lg font-bold hover:text-teal-500">
          {position}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{postedAt}</span>
          <span>•</span>
          <span>{contract}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => (
          <button
            key={skill}
            className="cursor-pointer px-3 py-1 text-sm font-semibold rounded-md bg-teal-50 hover:bg-teal-500 hover:text-white"
            onClick={() => onSkillClick(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
