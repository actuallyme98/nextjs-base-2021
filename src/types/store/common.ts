export type Pagination = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type OrderBy = 'ASC' | 'DESC';

export type Sorting<S = string> = {
  sortBy: S;
  orderBy: OrderBy;
};
