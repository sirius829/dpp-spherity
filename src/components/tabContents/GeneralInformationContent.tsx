import ScoreSection from "@components/sections/ScoreSection";
import { ScoreData, SpecData } from "types/types";
import SpecSection from "@components/sections/SpecSection";
import ScoreCard from "components/ui/cards/ScoreCard";
import SpecCard from "components/ui/cards/SpecCard";

interface GeneralInformationContentProps {
	scoreData: ScoreData[];
	basicData: SpecData[];
	modelData: SpecData[];
}

const GeneralInformationContent = ({ scoreData, basicData, modelData }: GeneralInformationContentProps) => {
	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px]">
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