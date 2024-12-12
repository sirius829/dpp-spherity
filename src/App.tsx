import useBatteryData from './hooks/useBatteryData';
import Tabs from './components/tabs/Tabs';
import Header from './components/header';
import Footer from './components/footer';

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

  const tabs = [
    { label: "General Information", content: "General Info content" },
    { label: "Materials and circularity", content: "Materials and circularity Content" },
    { label: "Supply chain due diligence report", content: "SupplyChain Content" },
    { label: "Performance and durability", content: "Performance content" },
    { label: "Cell Quality Assurance", content: "Cell Quality Assurance content" },
  ];

  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <Tabs tabs={tabs} />
      <Footer />
    </div>
  )
}

export default App
