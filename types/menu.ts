export type Badge = { label: string; value: string };

export type MenuItem = {
  id: string;
  title: string;
  desc: string;
  img: string;
  badges?: Badge[];
};

