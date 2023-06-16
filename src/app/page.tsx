"use client";

import { jsPDF } from "jspdf";
import React from "react";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import path from "path";
import logo from "../app/assets/SmartPaperLogo.jpeg";
import metaData from "../app/metaData.json";
import QRCode from "qrcode";

export default function App() {
  const [pdfUrl, setPdfUrl] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const jsonData = [
    { questionNo: "Q1", question1: "6 ", question2: "1" },
    { questionNo: "Q2", question1: "4 ", question2: "3" },
    { questionNo: "Q3", question1: "1 ", question2: "4" },
    { questionNo: "Q4", question1: "2 ", question2: "5" },
    { questionNo: "Q5", question1: "8 ", question2: "6" },
    { questionNo: "Q6", question1: "9 ", question2: "7" },
    { questionNo: "Q7", question1: "3 ", question2: "8" },
    { questionNo: "Q8", question1: "7 ", question2: "9" },

    { questionNo: "Q9", question1: "6 ", question2: "1" },
    { questionNo: "Q10", question1: "4 ", question2: "3" },
    { questionNo: "Q11", question1: "1 ", question2: "4" },
    { questionNo: "Q12", question1: "2 ", question2: "5" },
    { questionNo: "Q13", question1: "8 ", question2: "6" },
    { questionNo: "Q14", question1: "9 ", question2: "7" },
    { questionNo: "Q15", question1: "3 ", question2: "8" },
    { questionNo: "Q16", question1: "7 ", question2: "9" },
    { questionNo: "Q17", question1: "6 ", question2: "1" },
    { questionNo: "Q18", question1: "4 ", question2: "3" },
    { questionNo: "Q19", question1: "1 ", question2: "4" },
    { questionNo: "Q20", question1: "2 ", question2: "5" },
    // { questionNo: "Q21", question1: "8 ", question2: "6" },
    // { questionNo: "Q22", question1: "9 ", question2: "7" },
    // { questionNo: "Q23", question1: "3 ", question2: "8" },
    // { questionNo: "Q24", question1: "7 ", question2: "9" },
    // { questionNo: "Q25", question1: "6 ", question2: "1" },
    // { questionNo: "Q26", question1: "4 ", question2: "3" },
    // { questionNo: "Q27", question1: "1 ", question2: "4" },
    // { questionNo: "Q28", question1: "2 ", question2: "5" },
    // { questionNo: "Q29", question1: "8 ", question2: "+6" },
    // { questionNo: "Q30", question1: "9 ", question2: "+7" },
    // { questionNo: "Q31", question1: "3 ", question2: "+8" },
    // { questionNo: "Q32", question1: "7 ", question2: "+9" },
    // { questionNo: "Q33", question1: "6 ", question2: "+1" },
    // { questionNo: "Q34", question1: "4 ", question2: "+3" },
    // { questionNo: "Q35", question1: "1 ", question2: "+4" },

    // Add more items as needed
  ];

  type PdfItemProps = {
    questionNo: string;
    question1: string;
    question2: string;
    // answer: string;
  };

  const PdfItem: React.FC<PdfItemProps> = ({
    questionNo,
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          {questionNo}
          <div>{question2}</div>
        </div>
      </div>
    );
  };

  const itemPositions: any = [];
  const widthFactor = 827 / 595.28;
  const heightFactor = 1170 / 841.89;
  const temp = itemPositions;
  const handleGeneratePDF = async () => {
    var img = new Image();
    const pdf = new jsPDF("p", "pt", "a4");
    let startY = 170;
    let column = 0;
    const qrCodeData = "https://www.npmjs.com/package/qrcode";
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);
    const columnWidth = pdf.internal.pageSize.getWidth() / 4;
    // console.log(pdf.internal.pageSize.getHeight(), "height");
    // console.log(pdf.internal.pageSize.getWidth(), "width");

    const imageURL = "img";
    startY += 50;
    jsonData.forEach((item, index: any) => {
      const { question1, question2 } = item;

      // if (startY > 841.89) {
      //   pdf.addPage();
      //   startY = 80;
      //   startY += 30;
      //   column = 0;
      // }

      let startX = column * columnWidth + 65;

      // Render header section once
      if (index === 0) {
        pdf.setFontSize(30).setFont("helvetica", "bold");
        pdf.text("One-Digit Addition", 165, 45); //27...>184

        pdf.setFontSize(15).setFont("helvetica", "normal");
        pdf.text("Name:", 20, 100);
        pdf.setLineWidth(2);
        pdf.rect(70, 80, 140, 30);
        pdf.text("RollNo:", 230, 100);
        pdf.rect(285, 80, 80, 30);
        pdf.text("Date:", 390, 100);
        pdf.rect(430, 80, 100, 30);
        pdf.setFontSize(17);
        pdf.text("Add The Numbers!", 20, 150);
        pdf.setLineWidth(3);
        pdf.setDrawColor(112, 112, 112);
        pdf.line(0, 170, 599, 170);
        pdf.setLineWidth(1);
      }

      pdf.setFontSize(22);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont("helvetica", "bold");
      pdf.text(question1, startX + 13, startY);
      pdf.text(`+ ${question2}`, startX - 5, startY + 24);
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(2);
      pdf.rect(startX - 10, startY + 33, 60, 25);
      pdf.setTextColor(144, 144, 144);
      pdf.text(`${index + 1}.`, startX - 40, startY);
      pdf.setLineWidth(3);
      pdf.setDrawColor(120, 120, 120);
      pdf.line(0, 780, 599, 780);

      const cryptID = crypto.randomUUID();
      const itemPosition = {
        item: `${index + 1}`,
        ans: [`${parseInt(question1) + parseInt(question2)}`],
        modelType: "mathpix",
        contentType: "question",
        contentSubType: "decimal",
        maxScore: 1,
        difficulty: 50,
        skills: [],
        qBox: [],
        ansBox: [
          {
            x: startX - 10,
            y: startY + 33,
            h: 25,
            w: 60,
            boxType: "answer",
            id: cryptID,
          },
        ],
        id: cryptID,
        orientation: "ltr",
        rubric: "",
        question: "",
        language: "english",
      };
      itemPositions.push(itemPosition);

      column = (column + 1) % 4;
      if (column === 0) {
        startY += 120;
      }
      // if (startY > 841.89 && index !== jsonData.length - 1) {
      //   pdf.addPage();
      //   startY = 80;
      //   startY += 30;
      //   column = 0;
      // }
    });
    let newImage = new Image();
    newImage.src = logo.src;
    pdf.addImage(logo.src, "JPEG", 260, 805, 65, 18); //smartpaper logo

    pdf.addImage(qrCodeImage, "JPEG", 10, 10, 40, 40);
    pdf.addImage(qrCodeImage, "JPEG", 545, 10, 40, 40);
    pdf.addImage(qrCodeImage, "JPEG", 10, 790, 40, 40);
    pdf.addImage(qrCodeImage, "JPEG", 545, 790, 40, 40);
    itemPositions.forEach((obj: any) => {
      obj.ansBox[0].x = Math.round(obj.ansBox[0].x * widthFactor);
      obj.ansBox[0].y = Math.round(obj.ansBox[0].y * heightFactor);
      obj.ansBox[0].w = Math.round(obj.ansBox[0].w * widthFactor);
      obj.ansBox[0].h = Math.round(obj.ansBox[0].h * heightFactor);
      console.log(itemPositions, "final");
      const jsonMetaData = JSON.stringify(itemPositions);
    });

    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfUrl(pdfUrl);
    // pdf.save("Additionpdf.pdf");
  };

  return (
    <>
      <div
        className="App"
        id="foobar"
        style={{ color: "black", background: "white", padding: "1rem" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>NAME: ________</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3>CLASS:________</h3>
            <h3>ROLL NO: ________</h3>
          </div>
          <h1>ADDITION</h1>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {jsonData.map((item, index) => (
            <div
              key={index}
              style={{
                width: "20%",
                padding: "1rem",
                // backgroundColor: "red",
                margin: ".5rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  // backgroundColor:'yellow',
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                {item.questionNo}{" "}
              </div>
              <div
                style={{
                  // backgroundColor: "blue",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginLeft: ".6rem" }}>{item.question1}</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>{item.question2}</div>
                </div>
                <div
                  // answer box div
                  style={{
                    width: "40px",
                    height: "20px",
                    border: "1px solid #000",
                  }}
                ></div>
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
