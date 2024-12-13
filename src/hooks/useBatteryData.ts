import { useState, useEffect } from 'react';
import { fetchData } from '@services/fetchData';
import { BatteryDataResponse } from 'types/batteryData';

const useBatteryData = () => {
  const [batteryData, setBatteryData] = useState<BatteryDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const API_URL = import.meta.env.VITE_DIGITAL_PRODUCT_PASSPORT_API;
        if (!API_URL) {
          throw new Error("API URL is not defined in the environment variables");
        }

        const data = await fetchData<BatteryDataResponse>(API_URL);
        if (data) {
          setBatteryData(data);
        } else {
          throw new Error("No data returned from API");
        }
      } catch (err: any) {
        setError(err.message || "An unknown error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { batteryData, loading, error };
};

export default useBatteryData;
