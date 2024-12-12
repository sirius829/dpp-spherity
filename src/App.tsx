import useBatteryData from './hooks/useBatteryData';
import Tabs from './components/tabs/Tabs';
import Header from './components/header';
import Footer from './components/footer';
import DonutChart from '@components/ui/charts/DonutChart';
import { transformChartDataWithColors } from '@utils/transformChartData';

const App = () => {
  const { batteryData, loading, error } = useBatteryData();

  const electrolyteComposition = [
    {
      materialName: "Lithium hexafluorophosphate",
      materialWeight: 10,
      materialPercentageMassFraction: 5,
    },
    {
      materialName: "Graphite",
      materialWeight: 20,
      materialPercentageMassFraction: 10,
    },
    {
      materialName: "Cobalt",
      materialWeight: 5,
      materialPercentageMassFraction: 3,
    },
    {
      materialName: "Lithium",
      materialWeight: 15,
      materialPercentageMassFraction: 8,
    },
    {
      materialName: "Nickel manganese cobalt",
      materialWeight: 30,
      materialPercentageMassFraction: 15,
    },
    {
      materialName: "Aluminum",
      materialWeight: 5,
      materialPercentageMassFraction: 2,
    },
  ];
  

  const { data: chartData, colors } = transformChartDataWithColors(
    electrolyteComposition,
    "materialName",
    "materialPercentageMassFraction"
  );

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

  const data = [
    { name: 'Lithium', value: 25 },
    { name: 'Graphite', value: 35 },
    { name: 'Nickel', value: 15 },
    { name: 'Cobalt', value: 10 },
    { name: 'Others', value: 15 }
  ];

  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <Tabs tabs={tabs} />
      {/* <DonutChart 
        data={chartData}
        width={500}
        height={500}
        innerRadius={100}
        outerRadius={150}
        colors={colors}
        title="Electrolyte Composition"
      /> */}
      <Footer />
    </div>
  )
}

export default App
