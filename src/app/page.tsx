"use client";

import { jsPDF } from "jspdf";
import React from "react";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
export default function App() {
  const [pdfUrl, setPdfUrl] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const jsonData = [
    {
      question1: "6 ",
      question2: "+1",
      // answer: "="
    },
    {
      question1: "4 ",
      question2: "+3",
      // answer: "="
    },
    {
      question1: "1 ",
      question2: "+4",
      // answer: "="
    },
    {
      question1: "2 ",
      question2: "+5",
      // answer: "="
    },
    {
      question1: "8 ",
      question2: "+6",
      // answer: "="
    },
    {
      question1: "9 ",
      question2: "+7",
      // answer: "="
    },
    {
      question1: "3 ",
      question2: "+8",
      // answer: "="
    },
    {
      question1: "7 ",
      question2: "+9",
      // answer: "="
    },

    {
      question1: "6 ",
      question2: "+1",
      // answer: "="
    },
    {
      question1: "4 ",
      question2: "+3",
      // answer: "="
    },
    {
      question1: "1 ",
      question2: "+4",
      // answer: "="
    },
    {
      question1: "2 ",
      question2: "+5",
      // answer: "="
    },
    {
      question1: "8 ",
      question2: "+6",
      // answer: "="
    },
    {
      question1: "9 ",
      question2: "+7",
      // answer: "="
    },
    {
      question1: "3 ",
      question2: "+8",
      // answer: "="
    },
    {
      question1: "7 ",
      question2: "+9",
      // answer: "="
    },
    {
      question1: "6 ",
      question2: "+1",
      // answer: "="
    },
    {
      question1: "4 ",
      question2: "+3",
      // answer: "="
    },
    {
      question1: "1 ",
      question2: "+4",
      // answer: "="
    },
    {
      question1: "2 ",
      question2: "+5",
      // answer: "="
    },
    {
      question1: "8 ",
      question2: "+6",
      // answer: "="
    },
    {
      question1: "9 ",
      question2: "+7",
      // answer: "="
    },
    {
      question1: "3 ",
      question2: "+8",
      // answer: "="
    },
    {
      question1: "7 ",
      question2: "+9",
      // answer: "="
    },
    {
      question1: "6 ",
      question2: "+1",
      // answer: "="
    },
    {
      question1: "4 ",
      question2: "+3",
      // answer: "="
    },
    {
      question1: "1 ",
      question2: "+4",
      // answer: "="
    },
    {
      question1: "2 ",
      question2: "+5",
      // answer: "="
    },
    {
      question1: "8 ",
      question2: "+6",
      // answer: "="
    },
    {
      question1: "9 ",
      question2: "+7",
      // answer: "="
    },
    {
      question1: "3 ",
      question2: "+8",
      // answer: "="
    },
    {
      question1: "7 ",
      question2: "+9",
      // answer: "="
    },
    {
      question1: "6 ",
      question2: "+1",
      // answer: "="
    },
    {
      question1: "4 ",
      question2: "+3",
      // answer: "="
    },
    {
      question1: "1 ",
      question2: "+4",
      // answer: "="
    },

    // Add more items as needed
  ];

  type PdfItemProps = {
    question1: string;
    question2: string;
    // answer: string;
  };

  const PdfItem: React.FC<PdfItemProps> = ({
    question1,
    question2,
    // answer,
  }) => {
    return (
      <div
        id="foobar"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div
          style={{
            paddingLeft: "0.7rem",
          }}
        >
          {question1}
        </div>
        <div>{question2}</div>
        {/* <div>{answer}</div> */}
      </div>
    );
  };

  // const handleGeneratePDF = async () => {
  //   const pdf = new jsPDF("p", "pt", "a4");

  //   var pdfjs = document.getElementById("foobar")!;

  //   // Convert HTML to PDF in JavaScript
  //   // pdf.html(pdfjs, {
  //   //   callback: function (pdf) {
  //   //     // pdf.save("output.pdf");
  //   //   },
  //   //   html2canvas: {
  //   //     allowTaint: true,
  //   //     letterRendering: true,
  //   //     logging: false,
  //   //     scale: 0.2,
  //   //   },
  //   //   x: 10,
  //   //   y: 10,
  //   // });
  //   const pdfBlob = pdf.output("blob");
  //   const pdfUrl = URL.createObjectURL(pdfBlob);
  //   setPdfUrl(pdfUrl);
  // };
  // const handleGeneratePDF = async () => {
  //   const content: any = contentRef.current;

  //   if (content) {
  //     const canvas = await html2canvas(content, { scrollY: -window.scrollY });
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     // pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.addImage({
  //       imageData: imgData,
  //       x: 0,
  //       y: 0,
  //       width: canvas.width,
  //       height: canvas.height,
  //     });
  //     // pdf.save("output.pdf");
  //     const pdfBlob = pdf.output("blob");
  //     const pdfUrl = URL.createObjectURL(pdfBlob);
  //     setPdfUrl(pdfUrl);
  //   }
  // };
  const handleGeneratePDF = () => {
    const input:any = document.getElementById('foobar');
    const pdf = new jsPDF('p', 'pt', 'a4');

    const scale = 8; // Adjust the scaling factor as needed
  
    // html2canvas(input, { scale })
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const imgWidth = 595.28;
    //     const pageHeight = 841.89;
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //     let heightLeft = imgHeight;
    //     let position = 0;
  
    //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //     console.log(imgData,"imgDta");
    //     heightLeft -= pageHeight;
  
    //     while (heightLeft >= 0) {
    //       position = heightLeft - imgHeight;
    //       pdf.addPage();
    //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //       heightLeft -= pageHeight;
    //     }
    //     console.log("first")
    //     const pdfBlob = pdf.output('blob');
    //     pdf.save("pdf");
    //     const pdfUrl = URL.createObjectURL(pdfBlob);
    //     setPdfUrl(pdfUrl);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
      pdf.html(input, {
             callback: function (doc) {
               doc.save("output.pdf");
               console.log("converted")
             },
            //  html2canvas: {
            //    allowTaint: true,
            //    letterRendering: true,
            //    logging: false,
            //    scale: 0.2,
            //  },
             x: 10,
             y: 10,
             width:500,
             windowWidth:500
           });
           
  };

  return (
    <>
      <div className="App" id="foobar" >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>NAME: ______</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: ".5rem" }}>
            <h3>CLASS:______</h3>
            <h3>ROLL NO.: ______</h3>
          </div>
        </div>
        <h1>Maths Drill: ADDITION</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {jsonData.map((item, index) => (
            <div key={index} style={{ width: "25%", padding: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginLeft: ".6rem" }}>{item.question1}</div>
                <div>{item.question2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleGeneratePDF}>Generate PDF</button>
      </div>
      {pdfUrl && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>PDF Preview:</h2>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe src={pdfUrl} width="100%" height="500px"></iframe>
        </div>
      )}
    </>
  );
}

// const handleGeneratePDF = () => {
//   const pdf = new jsPDF("p", "pt", "a4");
//   let startY = 80;
//   let column = 0;
//   const columnWidth = pdf.internal.pageSize.getWidth() / 2;

//   pdf.setFontSize(18).setFont("helvetica", "bold");
//   pdf.text("Maths Drill: ADDITION", 50, startY);

//   startY += 30;

//   jsonData.forEach((item, index) => {
//     const { question1, question2,  } = item;

//     //a4: [595.28, 841.89],
//     if (startY > 841.89) {
//       pdf.addPage();
//       startY = 80;
//       startY += 30;
//       column = 0;
//     }

//     let startX = 0;
//     if (column === 0) {
//       startX = 50;
//     } else {
//       startX = columnWidth + 50;
//     }

//     pdf.setFontSize(12).setFont("helvetica", "normal");

//     if (index === 0) {
//       pdf.text("Name:______", startX, 50);
//       pdf.text("Class:______ ", startX + 200, 50);
//       pdf.text("Date:______ ", startX + 350, 50);
//     }

//     pdf.text(question1, startX + 7, startY);
//     pdf.text(question2, startX, startY + 10);
//     pdf.text(answer, startX, startY + 25);
//     pdf.line(startX, startY + 15, startX + 20, startY + 15);

//     if (column === 0) {
//       column = 1;
//     } else {
//       column = 0;
//       startY += 50;
//     }

//     if (startY > 841.89 && index !== jsonData.length) {
//       pdf.addPage();
//       startY = 80;
//       startY += 30;
//       column = 0;
//     }
//   });

//   const pdfBlob = pdf.output("blob");
//   const pdfUrl = URL.createObjectURL(pdfBlob);
//   setPdfUrl(pdfUrl);

// };

// const handleGeneratePDF = () => {
//   const pdf = new jsPDF("p", "pt", "a4");
//   let startY = 80;
//   let column = 0;
//   const columnWidth = pdf.internal.pageSize.getWidth() / 4;

//   pdf.setFontSize(18).setFont("helvetica", "bold");
//   pdf.text("Maths Drill: ADDITION", 50, startY);

//   startY += 30;

//   jsonData.forEach((item, index) => {
//     const {
//       question1,
//       question2,
//       // answer
//     } = item;

//     if (startY > 841.89) {
//       pdf.addPage();
//       startY = 80;
//       startY += 30;
//       column = 0;
//     }

//     let startX = column * columnWidth + 50;

//     pdf.setFontSize(15).setFont("helvetica", "normal");

//     // Render header section once
//     if (index === 0) {
//       pdf.text("Name:", startX, 50);
//       pdf.rect(startX + 45, 37, 50, 16);
//       pdf.text("Class:", startX + 100, 50);
//       pdf.rect(startX + 145, 37, 50, 16);
//       pdf.text("Date:", startX + 200, 50);
//       pdf.rect(startX + 240, 37, 50, 16);
//     }

//     pdf.text(question1, startX + 9, startY);
//     pdf.text(question2, startX, startY + 16);
//     // pdf.text(answer, startX, startY + 25);
//     // pdf.line(startX, startY + 19, startX + 20, startY + 19);
//     pdf.rect(startX, startY + 19, 30, 18);

//     column = (column + 1) % 4;
//     if (column === 0) {
//       startY += 80;
//     }

//     if (startY > 841.89 && index !== jsonData.length - 1) {
//       pdf.addPage();
//       startY = 80;
//       startY += 30;
//       column = 0;
//     }
//   });

//   const pdfBlob = pdf.output("blob");
//   const pdfUrl = URL.createObjectURL(pdfBlob);
//   setPdfUrl(pdfUrl);

// };
