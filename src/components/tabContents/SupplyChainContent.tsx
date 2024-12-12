import { SupplyChainFile } from "types/batteryData";
import { FileSection } from "@components/sections";
import FileTable from "@components/ui/tables/FileTable";

interface SupplyChainContentProps {
	supplyChainData: SupplyChainFile[];
};

const SupplyChainContent = ({ supplyChainData }: SupplyChainContentProps) => {
	return (
		<div className="mx-auto xs:px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl flex flex-col gap-y-[48px] relative mt-8">
			<FileSection title="Uploaded files of supply chain">
				<FileTable data={supplyChainData} />
			</FileSection>
		</div>
	);
};

export default SupplyChainContent;