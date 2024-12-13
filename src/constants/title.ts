export enum TabLabels {
  GENERAL_INFO = "General Information",
  MATERIAL_CIRCULARITY = "Materials and circularity",
  SUPPLY_CHAIN_REPORT = "Supply chain due diligence report",
  PERFORMANCE_DURABILITY = "Performance and durability",
  CELL_QUALITY_ASSURANCE = "Cell Quality Assurance"
}

export enum GeneralPageTitles {
  BASIC_SECTION = "Basic Data",
  MODEL_SECTION = "Model Details"
}

export enum MaterialPageTitles {
  ELECTROLYTE_SECTION = "Electrolyte Composition",
  ANODE_SECTION = "Anode Composition"
}

export enum SupplyChainPageTitles {
  UPLOADED_FILES_SECTION = "Uploaded files of supply chain",
}

export enum PerformancePageTitles {
  PERFORMANCE_AND_DURABILITY_SECTION = "Performance and durability",
}

export enum CellQAPageTitles {
  SAMPLE_ID = "Sample Identifiers",
  TEMPERATURE_TOL_TEST = "Temperature Tolerance Tests",
  PERFORMANCE_METRICS = "Performance Metrics",
  SAFETY_TEST = "Safety Durability Tests",
  KEY_FINDING_FROM_BAT_SAMPLE_CT_SCAN = "Key Findings from Batch Sample CT Scans",
  BATTERY_CT_SCAN = "Battery Cell CT Scans",
  ANODE_CT_SCAN = "Casing Cathode And Anode CT Scans",
  CATHODE_CT_SCAN = "Housing And The Cathode CT Scans",
  QA_MET = "QA Requirements Met"
}

export enum ScoreTitles {
  ESG_SCORE = "ESG",
  DUE_DILIGENCE_SCORE = "Due Diligence",
  CARBON_FOOTPRINT_SCORE = "Carbon Footprint"
}

export enum BasicDataTitles {
  MANUFACTURER_ID = "Manufacturer Identification",
  MANUFACTURING_PLACE = "Manufacturing Place",
  MANUFACTURING_DATE = "Manufacturing Date",
  BATTERY_CATEGORY = "Battery Category",
  BATTERY_WEIGHT = "Battery Weight",
  LIFE_CYCLE_STATUS = "Life-cycle status"
}

export enum ModelDataTitles {
  MODEL = "Battery Model",
  MANUFACTURER = "Manufacturer",
  LOCATION = "Location"
}

export enum PerformanceDataTitles {
  RATED_CAPACITY = "Rated capacity",
  MAX_POWER_PERMITTED = "Maximum power permitted",
  ORIGIN_POWER_CAPABILITY = "Original power capability",
  VOLT_NOMINAL = "Voltage nominal",
  VOLT_MIN = "Voltage minimum",
  VOLT_MAX = "Voltage maximum",
  PACK_INIT_DISCHARGE_CAPACITY = "Pack initial discharge capacity under test conditions",
  CAPACITY_THRESHOLD = "Capacity threshold for exhaustion",
  EXPECTED_LIFETIME_YEAR = "Expected lifetime (years)",
  EXPECTED_LIFETIME_MILE = "Expected lifetime (miles)",
  EXPECTED_LIFETIME_KM = "Expected lifetime (km)",
  COMMERCIAL_WARRANTY_PERIOD = "Commercial warranty period",
  TEMPERATURE_RANGE_MIN = "Temperature range idle state min",
  TEMPERATURE_RANGE_MAX = "Temperature range idle state max",
  CYCLE_LIFE_REF_TEST = "Cycle-life reference test",
  TRIP_ENERGY_EFFICIENCY = "Trip energy efficiency"
}

export enum TestDataTitles {
  BATCH_UUID = "Batch UUID",
  CELL_SAMP_UUID = "Cell Sample UUID",
  OPERATING_RANGE = "Operating Range",
  THERMAL_STABILITY = "Thermal Stability",
  COOLING_EFFICIENCY = "Cooling Efficiency",
  IMPURITIES = "Impurities",
  ANODE_OVERHANG = "Anode Overhang",
  CASING_ELECTRODE_ALIGNS = "Casing and Electrode Alignment",
  BATTERY_CELL_CT_SCAN = "Battery Cell CT Scan",
  CASING_CATHODE_ANODE_CT_SCAN = "Casing-Cathode-Anode CT Scan",
  CATHODE_CT_SCAN = "Housing and the Cathode CT Scan",
  BATTERY_CELL_SCAN = "Battery Cell Scan",
  CASING_CATHODE_ANODE = "Casing Cathode And Anode",
  HOUSING_CATHODE = "Housing And The Cathode",
}