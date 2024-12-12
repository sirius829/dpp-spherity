import FileTableCell from './FileTableCell';

interface FileTableRowProps {
  fileName: string;
  fileSize: string;
  uploadedDate: string;
  downloadLink: string;
}

const FileTableRow = ({ fileName, fileSize, uploadedDate, downloadLink }: FileTableRowProps) => {
  return (
    <tr className="font-inter">
      <FileTableCell className="w-1/4 text-gray-900">{fileName}</FileTableCell>
      <FileTableCell className="w-1/4 text-gray-500">{fileSize}</FileTableCell>
      <FileTableCell className="w-1/4 text-gray-500">{uploadedDate}</FileTableCell>
      <FileTableCell className="w-1/4 text-right">
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight border bg-slate-900 text-white hover:bg-slate-700 transition duration-300 ease-in-out"
        >
          Download
        </a>
      </FileTableCell>
    </tr>
  );
};

export default FileTableRow;
