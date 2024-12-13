import { AnalysisTableRow } from "types/types";
import { AnalysisSection } from "@components/sections";
import { CellQAPageTitles } from "@constants/title";
import AnalysisTable from "@components/ui/tables/AnalysisTable";

interface CellQAContentProps {
	sampleIdData: AnalysisTableRow[];
	temperatureTestsData: AnalysisTableRow[];
	performMetricsData: AnalysisTableRow[];
	safeTestsData: AnalysisTableRow[];
	keyFindingData: AnalysisTableRow[];
};

const CellQAContent = ({ sampleIdData, temperatureTestsData, performMetricsData, safeTestsData, keyFindingData }: CellQAContentProps) => {
	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px] relative mt-8">
			<AnalysisSection title={CellQAPageTitles.SAMPLE_ID}>
				<AnalysisTable rows={sampleIdData} />
			</AnalysisSection>
			<AnalysisSection title={CellQAPageTitles.TEMPERATURE_TOL_TEST}>
				<AnalysisTable rows={temperatureTestsData} />
			</AnalysisSection>
			<AnalysisSection title={CellQAPageTitles.PERFORMANCE_METRICS}>
				<AnalysisTable rows={performMetricsData} />
			</AnalysisSection>
			<AnalysisSection title={CellQAPageTitles.SAFETY_TEST}>
				<AnalysisTable rows={safeTestsData} />
			</AnalysisSection>
			<AnalysisSection title={CellQAPageTitles.KEY_FINDING_FROM_BAT_SAMPLE_CT_SCAN}>
				<AnalysisTable rows={keyFindingData} />
			</AnalysisSection>
		</div>
	);
};

export default CellQAContent;