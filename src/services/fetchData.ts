export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data: T = await response.json();

    if (!data || typeof data !== 'object') {
      throw new Error("Invalid data format");
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message || error);
    throw error;
  }
};
