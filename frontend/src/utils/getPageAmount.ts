export const getPagesAmount = (totalPostsAmount: number, limit: number): number => {
  return Math.ceil(totalPostsAmount / limit);
};