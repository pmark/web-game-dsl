// A simple function to add two numbers
export const add = (a, b) => {
    return a + b;
};
// Example async function to fetch data
export async function fetchData(url) {
    console.log('Fetching data from ' + url);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Data fetching failed');
    }
    return response.json();
}
export const truthy = true;
//# sourceMappingURL=module.js.map