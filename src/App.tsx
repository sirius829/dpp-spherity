import './App.css'
import useBatteryData from './hooks/useBatteryData';

const App = () => {
  const { batteryData, loading, error } = useBatteryData();

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  console.log("batteryData", batteryData);

  return (
    <div>
      
    </div>
  )
}

export default App
