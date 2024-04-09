import { fetchData } from './module.js';

// Using top-level await to fetch data before proceeding
const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
console.log(data);
