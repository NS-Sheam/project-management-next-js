export type TUser = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
};

export type TProject = {
  id: number;
  name: string;
  description: string;
  status: string;
  team: TTeam[];
  tasks: TTask[];
};

export type TTeam = {
  id: number;
  name: string;
  role: string;
};

export type TTask = {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  assignee: number;
};
