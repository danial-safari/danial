export type ProjectStatus = "In Progress" | "Pending" | "Finished";
export type ViewStyle = "grid" | "list" | "table" | "timeline" | "calendar";
export type SortOption =
  | "priority"
  | "progress"
  | "deadline"
  | "startDate"
  | "name";
export type SortDirection = "asc" | "desc";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  startDate: string;
  estimatedEndDate: string;
  progress: number;
  priority?: "Low" | "Medium" | "High";
  team?: { name: string; role: string }[];
  logo?: string;
  slug: string;
}
