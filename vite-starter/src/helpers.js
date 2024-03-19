export function kebabCaseToTitleCase(colorName) {
  // return colorName.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

  const colorWithSpaces = colorName.replaceAll('-', ' ');
  const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) => match.toUpperCase());
  return colorWithCaps;
}