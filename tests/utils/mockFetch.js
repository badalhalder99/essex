/**
 *
 * Mocks the global fetch response
 */
export const setMockFetchResponse = (expectedResponse, shouldFail = false) => {
  const mockJsonPromise = Promise.resolve(expectedResponse);
  const mockFetchPromise = shouldFail ? Promise.reject(new Error("Failure")) : Promise.resolve({
    json: () => mockJsonPromise
  });
  var globalRef = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};

/**
 * Clears the global fetch mock if it is mocked
 */
export const clearMockFetch = () => {
  var globalRef = global;
  if (globalRef.fetch.mockImplementation) {
    globalRef.fetch = undefined;
  }
};

// These can be useful when setting your mocked response
export const MOCK_RESTAURANT_ONE = {
  id: "1234",
  image: "https://www.some.image/1234",
  name: "Test Restaurant 1234",
  price: 1,
  tags: ["It", "Is", "A", "Test"],
  url: "https://www.deliverview.com/1234"
};
export const MOCK_RESTAURANT_TWO = {
  id: "5678",
  image: "https://www.some.image/5678",
  name: "Test Restaurant 5678",
  price: 1,
  tags: ["This", "Is", "Another", "Test"],
  url: "https://www.deliverview.com/5678"
};
export const MOCK_NEIGHBORHOOD = "Test Neighborhood";
export const MOCK_RESTAURANTS_API_RESPONSE = {
  neighborhood: MOCK_NEIGHBORHOOD,
  restaurants: [MOCK_RESTAURANT_ONE, MOCK_RESTAURANT_TWO]
};