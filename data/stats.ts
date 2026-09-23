export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export const stats: Stat[] = [
  { value: "650+", label: "Active Members", icon: "Users" },
  { value: "13+", label: "Staff Members", icon: "UserCheck" },
  { value: "10+", label: "Years of Activity", icon: "Clock" },
  { value: "5+", label: "Training Sessions per Week", icon: "BookOpen" },
  { value: "3+", label: "Targeted Fields", icon: "Target" },
];
