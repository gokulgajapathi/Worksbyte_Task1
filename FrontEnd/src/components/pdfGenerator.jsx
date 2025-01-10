import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

const PdfGenerator = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://worksbyte-task.vercel.app/api/fetch-data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const generatePdf = () => {
    const doc = new jsPDF();
    console.log("frontend",data);
    

    // Title
    doc.setFontSize(16);
    doc.text("Report", 10, 10);

    // Data fetched from Backend
    doc.setFontSize(12);
    data.forEach((item, index) => {
      const content = `Name: ${item.name}, Role: ${item.role}, Company: ${item.company}, Task: ${item.task}`;
      doc.text(`${index + 1}. ${content}`, 10, 20 + index * 10);
    });

    // Save the PDF
    doc.save("gokul_task1.pdf");
  };


  return (
    <div>
      <h1>PDF Generator</h1>
      <button onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;
