export interface Category {
  _id: number;
  name: string;
  description: string;
}

export interface OfficialFieldFilter {
  category?: string;
  state?: string;
  jurisdiction?: string;
  position?: string;
  level?: string;
  search?: string;
}

export interface Official {
  _id: string;
  image?: string;
  name: string;
  position: string;
  jurisdiction: string;
  level: string;
  state: string;
  description: string;
  email: string;
  phone: string;
  category: Category;
}
