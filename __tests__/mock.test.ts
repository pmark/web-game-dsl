import { fetchData } from '../src/module';

// Mocking a function
jest.mock('../src/module', () => ({
  ...jest.requireActual('../src/module'), // Import and retain the original implementations
  fetchData: jest.fn((url: string) => Promise.resolve(`mock data from ${url}`)), // Override fetchData
}));

describe('fetchData with mock', () => {
  it('fetches mock data successfully', async () => {
    const url = 'bogus://url.net';
    const data = await fetchData(url);
    expect(data).toBe(`mock data from ${url}`);
  });
});
