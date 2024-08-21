export type OmitExcept<T, K extends keyof T> = {
  [P in K]: T[P];
};
