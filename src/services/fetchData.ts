export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data: T = await response.json();

    // Validate response (basic validation example, adjust based on actual data)
    if (!data || typeof data !== 'object') {
      throw new Error("Invalid data format");
    }

    return data;
  } catch (error: any) {
    // Log error details for debugging
    console.error("Error fetching data:", error.message || error);

    // Re-throw the error for additional handling
    throw error;
  }
};
