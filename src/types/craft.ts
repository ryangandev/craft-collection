export type CraftMetadata = {
  slug: string;
  name: string;
  description?: string;
  date: string;
};

export type CraftData = CraftMetadata & {
  content: string;
};
