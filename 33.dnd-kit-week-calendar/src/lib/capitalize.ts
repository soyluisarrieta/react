/**
 * Capitalizes the first letter of a string.
 * Example: "hello" => "Hello"
 * @param value - The string to capitalize.
 * @returns The string with the first letter in uppercase.
 */

export function capitalize (value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
