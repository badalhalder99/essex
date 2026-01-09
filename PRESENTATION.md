# Restaurant Listing App

## Project Overview:

This project is a simple React application for showing resturant list from server.In this task I used hooks, data fetching, and state management.

* App Component is the root component.This render two component `Header` and `RestaurantList` component.
--------------------------------------------------------------------------------------------------------------------

## RestaurantList Component

This is the core logic component.

**Responsibilities:**

* Fetched restaurant data from the provided API
* Manage application states such as loading, error, and restaurant data
* Render a list of restaurant cards dynamically

**Implementation Details:**

* `useEffect` is used to trigger the API call when the component mounts
* `useState` is used to manage:

  * `restaurants` (API data)
  * `loading` (API request status)
  * `error` (error handling)

* The Fetch API is used to retrieve data asynchronously

***************************************************************************************************************************
### Side Effects with useEffect:

Data fetching is a side effect, so it is handled inside useEffect.The effect runs once when the component mounts.An empty dependency array ensures the API call is not repeated unnecessarily.An async function is defined inside the effect to allow the use of await

### API Request Logic:

The Fetch API is used to request data from the provided endpoint.The response status is checked using response.ok If the request fails, an error is thrown and handled gracefully.The response is parsed using response.json()
This ensures that unsuccessful responses do not break the UI.

### Data Handling:

After parsing the response: Restaurant data is extracted and stored in state.A fallback empty array is used to ensure safe rendering

This prevents runtime errors when using array methods like .map().

### Error and Loading Handling

While the request is in progress, a loading message is shown.If an error occurs, a user-friendly error message is displayed.The loading state is updated in a finally block to ensure consistency.This improves user experience and makes the UI resilient to failures.

### Rendering Logic

Once data is available: The component iterates over the restaurant array using .map() Each restaurant is rendered using the RestaurantCard component. A unique key is provided to help React optimize rendering.This keeps the component modular and easy to maintain.

***************************************************************************************************************************


### 4. RestaurantCard Component

Displays individual restaurant information such as: Name, Tags,Image, Price. Received all data through props. when I call the RestaurantCard component then I pass the data. data got from the api

---

## Data Flow

1. The `RestaurantList` component fetches data from the API
2. The response is stored in local state
3. Each restaurant object is passed to `RestaurantCard` via props
4. React automatically updates the UI when state changes

---

## Error and Loading Handling

* A loading message is displayed while data is being fetched
* An error message is shown if the API request fails

Becasue, Handling loading and error states improves user experience and prevents rendering issues when data is not yet available.

---

## Technologies Used

* React Hooks (`useState`, `useEffect`)
* Fetch API for HTTP requests

---

## Possible Improvements

Given more time, the following enhancements could be added:

* Search and filter functionality
* Improved accessibility
* Pagination or lazy loading

---

## Conclusion

This project focuses on clean component structure, proper use of React Hooks, and clear data flow from API to UI. The code is written to be readable, maintainable, and easy to extend in future iterations.
