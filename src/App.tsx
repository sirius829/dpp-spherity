import useBatteryData from './hooks/useBatteryData';
import Tabs from './components/tabs/Tabs';
import Header from './components/header';
import Footer from './components/footer';
import { TabLabels, ScoreTitles, BasicDataTitles, ModelDataTitles, PerformanceDataTitles, TestDataTitles } from '@constants/title';
import { ScoreData, SpecData, AnalysisTableRow } from 'types/types';
import { Material, SupplyChainFile, CredentialSubjectData } from 'types/batteryData';
import { GeneralInfoContent, MaterialsContent, SupplyChainContent, PerformanceContent } from '@components/tabContents';
import CellQAContent from '@components/tabContents/CellQAContent';

const App = () => {
  const { batteryData, loading, error } = useBatteryData();

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  const credentialSubject: CredentialSubjectData = batteryData?.[1].credentialSubject ?? {id: "N/A"};

  // General Information data
  const scoreData: ScoreData[] = [
    { title: ScoreTitles.ESG_SCORE, score: credentialSubject?.esgScore },
    { title: ScoreTitles.DUE_DILIGENCE_SCORE, score: credentialSubject?.dueDiligenceScore },
    { title: ScoreTitles.CARBON_FOOTPRINT_SCORE, score: credentialSubject?.greenhouseGasScore },
  ];

  const basicData: SpecData[] = [
    { title: BasicDataTitles.MANUFACTURER_ID, specification: credentialSubject?.manufacturerIdentification },
    { title: BasicDataTitles.MANUFACTURING_PLACE, specification: credentialSubject?.manufacturingPlace },
    { title: BasicDataTitles.MANUFACTURING_DATE, specification: credentialSubject?.manufacturingDate },
    { title: BasicDataTitles.BATTERY_CATEGORY, specification: credentialSubject?.batteryCategory },
    { title: BasicDataTitles.BATTERY_WEIGHT, specification: credentialSubject?.batteryWeight },
    { title: BasicDataTitles.LIFE_CYCLE_STATUS, specification: credentialSubject?.lifeCycleStatus },
  ];

  const modelData: SpecData[] = [
    { title: ModelDataTitles.MODEL, specification: credentialSubject?.batteryModel },
    { title: ModelDataTitles.MANUFACTURER, specification: credentialSubject?.manufacturer },
    { title: ModelDataTitles.LOCATION, specification: credentialSubject?.location },
  ];

  // Materials and circularity data
  const electrolyteData: Material[] = credentialSubject?.cellChemistry?.electrolyteComposition ?? [];
  const anodeData: Material[] = credentialSubject?.cellChemistry?.anodeActiveMaterials ?? [];

  // Supply chain due diligence report data
  const supplyChainData: SupplyChainFile[] = credentialSubject?.supplyChainFiles ?? [];

  // Performance and durability data
  const performanceData: SpecData[] = [
    { title: PerformanceDataTitles.RATED_CAPACITY, specification: `${credentialSubject?.ratedCapacity} Ah`},
    { title: PerformanceDataTitles.MAX_POWER_PERMITTED, specification: `${credentialSubject?.maximumPowerPermitted} kW`},
    { title: PerformanceDataTitles.ORIGIN_POWER_CAPABILITY, specification: `${credentialSubject?.originalPowerCapability} kW`},
    { title: PerformanceDataTitles.VOLT_NOMINAL, specification: `${credentialSubject?.voltageNominal} V`},
    { title: PerformanceDataTitles.VOLT_MIN, specification: `${credentialSubject?.voltageMin} V`},
    { title: PerformanceDataTitles.VOLT_MAX, specification: `${credentialSubject?.voltageMaximum} V`},
    { title: PerformanceDataTitles.PACK_INIT_DISCHARGE_CAPACITY, specification: `${credentialSubject?.initialDischargeCapacity} Ah`},
    { title: PerformanceDataTitles.CAPACITY_THRESHOLD, specification: `${credentialSubject?.exhaustionCapacityThreshold} %`},
    { title: PerformanceDataTitles.EXPECTED_LIFETIME_YEAR, specification: `${credentialSubject?.expectedLifetimeYears} yers`},
    { title: PerformanceDataTitles.EXPECTED_LIFETIME_MILE, specification: credentialSubject?.expectedLifetimeMiles },
    { title: PerformanceDataTitles.EXPECTED_LIFETIME_KM, specification: credentialSubject?.expectedLifetimeKm },
    { title: PerformanceDataTitles.COMMERCIAL_WARRANTY_PERIOD, specification: `${credentialSubject?.commercialWarrantyPeriod} years`},
    { title: PerformanceDataTitles.TEMPERATURE_RANGE_MIN, specification: `${credentialSubject?.temperatureIdleStateMin} 'C`},
    { title: PerformanceDataTitles.TEMPERATURE_RANGE_MAX, specification: `${credentialSubject?.temperatureIdleStateMax} 'C`},
    { title: PerformanceDataTitles.CYCLE_LIFE_REF_TEST, specification: credentialSubject?.cycleLifeReferenceTest },
    { title: PerformanceDataTitles.TRIP_ENERGY_EFFICIENCY, specification: credentialSubject?.tripEnergyEfficiency },
  ];

  // Cell Quality Assurance data
  const sampleIdData: AnalysisTableRow[] = [
    { label: TestDataTitles.BATCH_UUID, value: batteryData?.[0].credentialSubject?.batchUUID },
    { label: TestDataTitles.CELL_SAMP_UUID, value: batteryData?.[0].credentialSubject?.cellSampleUUID },
  ];

  const temperatureTestsData: AnalysisTableRow[] = [
    { label: TestDataTitles.OPERATING_RANGE, value: batteryData?.[0].credentialSubject?.temperatureToleranceTests?.operatingRange },
    { label: TestDataTitles.THERMAL_STABILITY, value: batteryData?.[0].credentialSubject?.temperatureToleranceTests?.thermalStability },
    { label: TestDataTitles.COOLING_EFFICIENCY, value: batteryData?.[0].credentialSubject?.temperatureToleranceTests?.coolingEfficiency },
  ];

  const performMetricsData: AnalysisTableRow[] = [
    { label: TestDataTitles.OPERATING_RANGE, value: batteryData?.[0].credentialSubject?.performanceMetrics?.capacityRetention },
    { label: TestDataTitles.THERMAL_STABILITY, value: batteryData?.[0].credentialSubject?.performanceMetrics?.energyDensity },
    { label: TestDataTitles.COOLING_EFFICIENCY, value: batteryData?.[0].credentialSubject?.performanceMetrics?.chargeDischargeRate },
  ];

  const safeTestsData: AnalysisTableRow[] = [
    { label: TestDataTitles.OPERATING_RANGE, value: batteryData?.[0].credentialSubject?.safetyDurabilityTests?.shortCircuitResistance },
    { label: TestDataTitles.THERMAL_STABILITY, value: batteryData?.[0].credentialSubject?.safetyDurabilityTests?.vibrationShock },
    { label: TestDataTitles.COOLING_EFFICIENCY, value: batteryData?.[0].credentialSubject?.safetyDurabilityTests?.lifeCycle },
  ];

  const keyFindingData: AnalysisTableRow[] = [
    { label: TestDataTitles.IMPURITIES, value: batteryData?.[0].credentialSubject?.CTScans?.impurities },
    { label: TestDataTitles.ANODE_OVERHANG, value: batteryData?.[0].credentialSubject?.CTScans?.anodeOverhang },
    { label: TestDataTitles.CASING_ELECTRODE_ALIGNS, value: batteryData?.[0].credentialSubject?.CTScans?.casingAndElectrodeAlignment },
  ];

  const tabs = [
    { label: TabLabels.GENERAL_INFO, content: <GeneralInfoContent scoreData={scoreData} basicData={basicData} modelData={modelData} /> },
    { label: TabLabels.MATERIAL_CIRCULARITY, content: <MaterialsContent electrolyteData={electrolyteData} anodeData={anodeData} /> },
    { label: TabLabels.SUPPLY_CHAIN_REPORT, content: <SupplyChainContent supplyChainData={supplyChainData} /> },
    { label: TabLabels.PERFORMANCE_DURABILITY, content: <PerformanceContent performanceData={performanceData} /> },
    { label: TabLabels.CELL_QUALITY_ASSURANCE, content: <CellQAContent sampleIdData={sampleIdData} temperatureTestsData={temperatureTestsData} performMetricsData={performMetricsData} safeTestsData={safeTestsData} keyFindingData={keyFindingData} /> },
  ];

   return (
    <>
      <Header />
      <Tabs tabs={tabs} />
      <Footer />
    </>
  )
}

export default App
