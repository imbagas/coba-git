export function ucfirst(string) {
  if (isNaN(string)) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
}
