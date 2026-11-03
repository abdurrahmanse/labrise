export const PAGE_SIZE = 12;

export function paginate<T>(items: T[], page: number, size = PAGE_SIZE) {
  const pages = Math.max(1, Math.ceil(items.length / size));
  const current = Math.min(Math.max(page, 1), pages);
  return { pages, current, items: items.slice((current - 1) * size, current * size) };
}
