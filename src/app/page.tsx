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
