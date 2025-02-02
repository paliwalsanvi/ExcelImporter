
import { useState } from "react";
import FileUpload from "./components/FileUpload";
import PreviewTable from "./components/PreviewTable";
import { importValidRows } from "./api";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const [uploadedData, setUploadedData] = useState([]); // Store uploaded data

  const handleUploadSuccess = (data) => {
    setUploadedData(data); // Update state with uploaded data
  };

  // const handleImport = async () => {
  //   try {
  //     await importValidRows();
  //     alert("Data imported successfully!");
  //     setRefresh(!refresh);
  //   } catch (err) {
  //     alert("Failed to import data.");
  //   }
  // };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Excel Data Importer</h1>
      <FileUpload onUploadSuccess={handleUploadSuccess} />
      <PreviewTable data={uploadedData}/>

    </div>
  );
};

export default App;
