export type Proof = {
  jws: string;
  type: string;
  created: string;
  proofPurpose: string;
  verificationMethod: string;
};

export type BatteryCellScan = {
  scanDate: string;
  scanImage: string;
  scanTitle: string;
  scanImageSize: string;
  QARequirementsMet: string;
};

export type PerformanceMetrics = {
  energyDensity: number;
  capacityRetention: string;
  chargeDischargeRate: string;
};

export type SafetyDurabilityTests = {
  lifeCycle: string;
  vibrationShock: string;
  shortCircuitResistance: string;
};

export type BatteryCellHomologation = {
  chargeRate: string;
  energyDensity: number;
  lifeExpectancy: string;
};

export type TemperatureToleranceTests = {
  operatingRange: string;
  thermalStability: string;
  coolingEfficiency: string;
};

export type Material = {
  materialName: string;
  materialWeight: number;
  materialPercentageMassFraction: number;
};

export type MaterialFile = {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
};

export type SupplyChainFile = {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
};

export type CertificationFile = {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
};

export type BatteryData = {
  id: string;
  type: string[];
  proof: Proof;
  issuer: string;
  "@context": string[];
  issuanceDate: string;
  credentialSubject: {
    id: string;
    PPAP?: {
      QAConfirmed: boolean;
      approvalDate: string;
    };
    CTScans?: {
      impurities: string;
      anodeOverhang: string;
      batteryCellScan: BatteryCellScan;
      housingAndTheCathode: BatteryCellScan;
      casingCathodeAndAnode: BatteryCellScan;
      casingAndElectrodeAlignment: string;
    };
    batchUUID: string;
    cellSampleUUID: string;
    performanceMetrics: PerformanceMetrics;
    safetyDurabilityTests: SafetyDurabilityTests;
    batteryCellHomologation: BatteryCellHomologation;
    temperatureToleranceTests: TemperatureToleranceTests;
    esgScore?: string;
    location?: string;
    voltageMin?: string;
    batteryModel?: string;
    manufacturer?: string;
    batteryWeight?: string;
    cellChemistry?: {
      anodeActiveMaterials: Material[];
      anodeCompositionOther: Material[];
      cathodeActiveMaterials: Material[];
      cathodeCompositionOther: Material[];
      electrolyteComposition: Material[];
      recyclateContentActiveMaterials: Material[];
    };
    materialFiles?: MaterialFile[];
    ratedCapacity?: string;
    voltageMaximum?: string;
    voltageNominal?: string;
    batteryCategory?: string;
    lifeCycleStatus?: string;
    supplyChainFiles?: SupplyChainFile[];
    dueDiligenceScore?: string;
    manufacturingDate?: string;
    certificationFiles?: CertificationFile[];
    expectedLifetimeKm?: string;
    greenhouseGasScore?: string;
    manufacturingPlace?: string;
    chemistryComposition?: string;
    tripEnergyEfficiency?: string;
    expectedLifetimeMiles?: string;
    expectedLifetimeYears?: string;
    maximumPowerPermitted?: string;
    cycleLifeReferenceTest?: string;
    originalPowerCapability?: string;
    temperatureIdleStateMax?: string;
    temperatureIdleStateMin?: string;
    commercialWarrantyPeriod?: string;
    initialDischargeCapacity?: string;
    manufacturerIdentification?: string;
    exhaustionCapacityThreshold?: string;
  };
};

export type BatteryDataResponse = BatteryData[];
