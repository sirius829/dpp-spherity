export type ScoreData = {
	title: string;
	score?: string;
};

export type SpecData = {
	title: string;
	specification?: string;
};

export type MaterialData = {
	materialName: string;
	materialWeight: number;
	materialPercentageMassFraction: number;
};

export type AnalysisTableRow = {
  label: string;
  value?: string | number;
};

export type FileData = {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
};
