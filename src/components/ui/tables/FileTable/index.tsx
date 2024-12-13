import FileTableRow from './FileTableRow';
import { FileData } from 'types/types';

interface FileTableProps {
  data: FileData[];
}

const FileTable = ({ data }: FileTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-700">
      <tbody className="min-w-full divide-y divide-gray-300">
        {data.map((row, index) => (
          <FileTableRow
            key={index}
            fileName={row.fileName}
            fileSize={`File size: ${row.fileSize}`}
            uploadedDate={`Uploaded on: ${row.uploadDate}`}
            downloadLink={row.fileUrl}
          />
        ))}
      </tbody>
    </table>
  );
};

export default FileTable;
