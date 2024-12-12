import useBatteryData from './hooks/useBatteryData';
import Tabs from './components/tabs/Tabs';
import Header from './components/header';
import Footer from './components/footer';
import { TabLabels, ScoreTitles, BasicDataTitles, ModelDataTitles } from '@constants/title';
import { ScoreData, SpecData } from 'types/types';
import { Material, SupplyChainFile } from 'types/batteryData';
import { GeneralInformationContent, MaterialsContent, SupplyChainContent } from '@components/tabContents';

interface CellChemistry {
  anodeActiveMaterials: Material[];
  anodeCompositionOther: Material[];
  cathodeActiveMaterials: Material[];
  cathodeCompositionOther: Material[];
  electrolyteComposition: Material[];
  recyclateContentActiveMaterials: Material[];
}

interface CredentialSubject {
  esgScore?: string;
  dueDiligenceScore?: string;
  greenhouseGasScore?: string;
  manufacturerIdentification?: string;
  manufacturingPlace?: string;
  manufacturingDate?: string;
  batteryCategory?: string;
  batteryWeight?: string;
  lifeCycleStatus?: string;
  batteryModel?: string;
  manufacturer?: string;
  location?: string;
  cellChemistry?: CellChemistry;
  supplyChainFiles?: SupplyChainFile[];
}

const App = () => {
  const { batteryData, loading, error } = useBatteryData();

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  const credentialSubject: CredentialSubject = batteryData?.[1].credentialSubject ?? {};

  const scoreData: ScoreData[] = [
    { title: ScoreTitles.ESG_SCORE, score: credentialSubject?.esgScore ?? "N/A" },
    { title: ScoreTitles.DUE_DILIGENCE_SCORE, score: credentialSubject?.dueDiligenceScore ?? "N/A" },
    { title: ScoreTitles.CARBON_FOOTPRINT_SCORE, score: credentialSubject?.greenhouseGasScore ?? "N/A" },
  ];

  const basicData: SpecData[] = [
    { title: BasicDataTitles.MANUFACTURER_ID, specification: credentialSubject?.manufacturerIdentification ?? "N/A" },
    { title: BasicDataTitles.MANUFACTURING_PLACE, specification: credentialSubject?.manufacturingPlace ?? "N/A" },
    { title: BasicDataTitles.MANUFACTURING_DATE, specification: credentialSubject?.manufacturingDate ?? "N/A" },
    { title: BasicDataTitles.BATTERY_CATEGORY, specification: credentialSubject?.batteryCategory ?? "N/A" },
    { title: BasicDataTitles.BATTERY_WEIGHT, specification: credentialSubject?.batteryWeight ?? "N/A" },
    { title: BasicDataTitles.LIFE_CYCLE_STATUS, specification: credentialSubject?.lifeCycleStatus ?? "N/A" },
  ];

  const modelData: SpecData[] = [
    { title: ModelDataTitles.MODEL, specification: credentialSubject?.batteryModel ?? "N/A" },
    { title: ModelDataTitles.MANUFACTURER, specification: credentialSubject?.manufacturer ?? "N/A" },
    { title: ModelDataTitles.LOCATION, specification: credentialSubject?.location ?? "N/A" },
  ];

  const electrolyteData: Material[] = credentialSubject?.cellChemistry?.electrolyteComposition ?? [];
  const anodeData: Material[] = credentialSubject?.cellChemistry?.anodeActiveMaterials ?? [];

  const supplyChainData: SupplyChainFile[] = credentialSubject?.supplyChainFiles ?? [];

  const tabs = [
    { label: TabLabels.GENERAL_INFO, content: <GeneralInformationContent scoreData={scoreData} basicData={basicData} modelData={modelData} /> },
    { label: TabLabels.MATERIAL_CIRCULARITY, content: <MaterialsContent electrolyteData={electrolyteData} anodeData={anodeData} /> },
    { label: TabLabels.SUPPLY_CHAIN_REPORT, content: <SupplyChainContent supplyChainData={supplyChainData} /> },
    { label: TabLabels.PERFORMANCE_DURABILITY, content: "Performance content" },
    { label: TabLabels.CELL_QUALITY_ASSURANCE, content: "Cell Quality Assurance content" },
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
