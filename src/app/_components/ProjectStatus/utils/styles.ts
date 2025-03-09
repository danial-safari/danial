import { ProjectStatus } from "../types";

export const getStatusColor = (status: ProjectStatus) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "Pending":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "Finished":
      return "bg-green-500/10 text-green-500 border-green-500/20";
  }
};

export const getPriorityColor = (priority: "Low" | "Medium" | "High") => {
  switch (priority) {
    case "High":
      return "bg-red-500/10 text-red-500 border-red-500/20";
    case "Medium":
      return "bg-orange-500/10 text-orange-500 border-orange-500/20";
    case "Low":
      return "bg-green-500/10 text-green-500 border-green-500/20";
  }
};
