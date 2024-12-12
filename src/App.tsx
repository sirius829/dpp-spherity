import useBatteryData from './hooks/useBatteryData';
import Tabs from './components/tabs/Tabs';
import Header from './components/header';
import Footer from './components/footer';
import DonutChart from '@components/ui/charts/DonutChart';
import { transformChartDataWithColors } from '@utils/transformChartData';
import { TabLabels, ScoreTitles, BasicDataTitles, ModelDataTitles } from './constants';
import { ScoreData, SpecData } from 'types/types';
import { GeneralInformationContent } from '@components/tabContents';

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

  const scoreData: ScoreData[] = [
    { title: ScoreTitles.ESG_SCORE, score: batteryData?.[1].credentialSubject?.esgScore ?? "N/A" },
    { title: ScoreTitles.DUE_DILIGENCE_SCORE, score: batteryData?.[1].credentialSubject?.dueDiligenceScore ?? "N/A" },
    { title: ScoreTitles.CARBON_FOOTPRINT_SCORE, score: batteryData?.[1].credentialSubject?.greenhouseGasScore ?? "N/A" },
  ];

  const basicData: SpecData[] = [
    { title: BasicDataTitles.MANUFACTURER_ID, specification: batteryData?.[1].credentialSubject?.manufacturerIdentification ?? "N/A" },
    { title: BasicDataTitles.MANUFACTURING_PLACE, specification: batteryData?.[1].credentialSubject?.manufacturingPlace ?? "N/A" },
    { title: BasicDataTitles.MANUFACTURING_DATE, specification: batteryData?.[1].credentialSubject?.manufacturingDate ?? "N/A" },
    { title: BasicDataTitles.BATTERY_CATEGORY, specification: batteryData?.[1].credentialSubject?.batteryCategory ?? "N/A" },
    { title: BasicDataTitles.BATTERY_WEIGHT, specification: batteryData?.[1].credentialSubject?.batteryWeight ?? "N/A" },
    { title: BasicDataTitles.LIFE_CYCLE_STATUS, specification: batteryData?.[1].credentialSubject?.lifeCycleStatus ?? "N/A" },
  ];

  const modelData: SpecData[] = [
    { title: ModelDataTitles.MODEL, specification: batteryData?.[1].credentialSubject?.batteryModel ?? "N/A" },
    { title: ModelDataTitles.MANUFACTURER, specification: batteryData?.[1].credentialSubject?.manufacturer ?? "N/A" },
    { title: ModelDataTitles.LOCATION, specification: batteryData?.[1].credentialSubject?.location ?? "N/A" },
  ];

  const tabs = [
    { label: TabLabels.GENERAL_INFO, content: <GeneralInformationContent scoreData={scoreData} basicData={basicData} modelData={modelData} /> },
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
