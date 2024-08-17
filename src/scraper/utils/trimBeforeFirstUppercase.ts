
/**
 * This function trims the input string before the first occurrence of an uppercase letter.
 * If no uppercase letter is found, the function returns the original input string.
 *
 * @param input - The input string to be processed.
 * @returns The processed string, with all characters before the first uppercase letter removed.
 *          If no uppercase letter is found, the original input string is returned.
 */

export const trimBeforeFirstUppercase = (input: string): string => {
  const index = input.search(/[A-Z]/);
  return index !== -1 ? input.slice(index) : input;
}
