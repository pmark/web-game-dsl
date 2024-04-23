// Function to create and return game elements based on JSX input
// export function createGameElement(
//   type: any,
//   props?: any,
//   ...children: any[]
// ): any {
//   console.log(`Creating type: ${type} with props:`, props);
//   return { type, props, children };
// }
/**
 * A custom implementation of the createElement function to support JSX syntax for game element creation.
 * @param tag The component or element type to create.
 * @param props The properties to pass to the component or element.
 * @param children Child elements or components.
 * @returns An instance of the specified element or component.
 */
export function createElement(tag, props, ...children) {
    if (typeof tag === "function") {
        return tag(props);
    }
    throw new Error(`Unsupported element type: ${tag}`);
}
//# sourceMappingURL=jsx-runtime.js.map