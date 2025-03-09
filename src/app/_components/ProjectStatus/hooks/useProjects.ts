import { useState, useMemo } from "react";
import { Project, ProjectStatus, SortOption, SortDirection } from "../types";

interface UseProjectsProps {
  initialProjects: Project[];
}

export const useProjects = ({ initialProjects }: UseProjectsProps) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(-1);
  const [selectedYear, setSelectedYear] = useState<number>(-1);
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "All">(
    "All"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSort, setCurrentSort] = useState<{
    option: SortOption;
    direction: SortDirection;
  }>({
    option: "priority",
    direction: "asc",
  });

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const startDate = new Date(project.startDate);
      const endDate = new Date(project.estimatedEndDate);

      // Date filter
      const projectMonths = new Set();
      const projectYears = new Set();

      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        projectMonths.add(currentDate.getMonth());
        projectYears.add(currentDate.getFullYear());
        currentDate.setMonth(currentDate.getMonth() + 1);
      }

      const monthMatch =
        selectedMonth === -1 || projectMonths.has(selectedMonth);
      const yearMatch = selectedYear === -1 || projectYears.has(selectedYear);
      const statusMatch =
        selectedStatus === "All" || project.status === selectedStatus;

      // Search query filter
      const searchMatch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return monthMatch && yearMatch && statusMatch && searchMatch;
    });
  }, [
    initialProjects,
    selectedMonth,
    selectedYear,
    selectedStatus,
    searchQuery,
  ]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      const direction = currentSort.direction === "asc" ? 1 : -1;

      switch (currentSort.option) {
        case "name":
          return direction * a.title.localeCompare(b.title);
        case "priority": {
          const priorityOrder = { High: 3, Medium: 2, Low: 1 };
          const aPriority = priorityOrder[a.priority || "Low"] || 0;
          const bPriority = priorityOrder[b.priority || "Low"] || 0;
          return direction * (bPriority - aPriority);
        }
        case "progress":
          return direction * (a.progress - b.progress);
        case "deadline":
          return (
            direction *
            (new Date(a.estimatedEndDate).getTime() -
              new Date(b.estimatedEndDate).getTime())
          );
        case "startDate":
          return (
            direction *
            (new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
          );
        default:
          return 0;
      }
    });
  }, [filteredProjects, currentSort]);

  return {
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    selectedStatus,
    setSelectedStatus,
    searchQuery,
    setSearchQuery,
    currentSort,
    setCurrentSort,
    filteredProjects,
    sortedProjects,
  };
};
