interface AnalysisTableRow {
  label: string;
  value: string;
}

interface AnalysisTableProps {
  rows: AnalysisTableRow[];
}

const AnalysisTable = ({ rows }: AnalysisTableProps) => {
  return (
    <table className="shadow table-fixed w-full">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "odd:bg-gray-50" : ""}>
            <td className="text-gray-500 text-sm font-inter font-semibold px-6 py-4">
              {row.label}
            </td>
            <td className="text-gray-700 text-base font-inter font-semibold px-6 py-4">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnalysisTable;
