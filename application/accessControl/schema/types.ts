
export interface ProjectToAdd {
  title: string;
  description: string;
};

export interface ProjectFromDb extends ProjectToAdd {
  title: string;
  description: string;
};

export type EmailOptions = {
  to: string;
  subject: string;
  html: string;
};
