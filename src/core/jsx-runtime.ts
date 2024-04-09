// Function to create and return game elements based on JSX input
export function createGameElement(
  type: any,
  props?: any,
  ...children: any[]
): any {
  console.log(`Creating type: ${type} with props:`, props);
  return { type, props, children };
}
