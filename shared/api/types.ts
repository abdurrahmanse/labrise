/** Error body every endpoint returns on failure (see shared/api/respond.ts). */
export interface ApiErrorBody {
  error: { status: number; message: string };
}

/** Page of results, the shape of every paginated endpoint. */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
}
