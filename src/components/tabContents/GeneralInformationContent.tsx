import { ScoreSection, SpecSection } from "@components/sections";
import { ScoreData, SpecData } from "types/types";
import { ScoreCard, SpecCard } from "@components/ui/cards";

interface GeneralInformationContentProps {
	scoreData: ScoreData[];
	basicData: SpecData[];
	modelData: SpecData[];
}

const GeneralInformationContent = ({ scoreData, basicData, modelData }: GeneralInformationContentProps) => {
	return (
		<div>
			<ScoreSection title={""} >
				{scoreData.map((data, index) => (
					<ScoreCard key={index} title={data.title} score={data.score} />
				))}
			</ScoreSection>
			<SpecSection title="Basic Data">
				{basicData.map((data, index) => (
					<SpecCard key={index} title={data.title} description={data.specification} />
				))}
			</SpecSection>
			<SpecSection title="Model Details">
				{modelData.map((data, index) => (
					<SpecCard key={index} title={data.title} description={data.specification} />
				))}
			</SpecSection>
		</div>
	);
};

export default GeneralInformationContent;