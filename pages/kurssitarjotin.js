import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breaker from "../components/Breaker";

const leakInfo = [
  "11,PS03.1,RUA07.1,RUB110.1,ENA12.2,ENA11.5,EN07.1,ENA08.1,UV14.1,KU12.1,BI08.1,LNT13.1,MAA09.2,GE04.1",
  "12,PS06.2,BI06.2,HI05.1,FY06.1,EAB36.1,SAA08.1,RUB15.2,ENA10.1,ENA11.6,KU07.1,MAA13.1,MAA09.4,MAB10.1,ÄI11.1,ÄI09.1",
  "13,PS06.3,PS05.1,BI05.1,HI06.1,FY07.1,UE03.1,HI02.1,RUB17.1,ENA11.1,ENA07.4,MU06.1,KU09.1,MAA09.5,ÄI07.1",
  "14,UE07.1,YH05.1,KE06.1,GE05.1,TE04.3,FI03.1,RUB19.1,ENA11.2,ENA08.3,LI13.1,MAA09.3,MAB07.1,ÄI08.1,ÄI05.1",
  "15,KE06.2,YH05.2,UE06.1,YH04.1,HI08.1,SAB38.1,RUB17.2,ENA11.3,ENA07.3,MAA09.6,MAA16.2,MAA10.2,ÄI07.2",
  "16,UE05.1,TE02.1,YH03.1,RUB19.2,ENA13.1,ENA11.4,ENA07.2,ENA08.2,KU08.1,MAA09.7,MAB08.1,ÄI06.1",
  "17,PS06.1,BI06.1,HI07.1,FY08.1,KU04.1,LI03.1,LNT04.1,MAA09.1,GE02.1",
  "18PE,LI09.1",
  "18TI,LI12.1",
  "18TO,MU05.1,MU09.1",
  "21,GE03.1,FY11.1,LNT15.1,RUB112.1,ENA14.1,UV15.1,OPO2.1[ULT],OPO2.10[KOI],OPO2.11[VÄH],OPO2.12[PIH],MAA10.1,MAB07.3,ÄI08.6,YH03.4(e)",
  "22,HI04.1,RUB111.1,RUB14.1,ENA10.2,ENA08.5,UV21.1,UV24.1,KU11.1,MU07.1,AT03.1,MAA10.2,ÄI08.10,ÄI08.9,ÄI07.3",
  "23,YH03.2,TE03.1,SAB39.1,SAB27.1,RUB16.2,ENA07.6,KU15.1,MAA13.2,MAA10.3,MAB06.1,ÄI08.11,OPO3.1,ÄI06.2,RAB37.1",
  "24,EAB37.1,HI03.1,FI04.1,BI05.2,PS04.1,RUA08.1,RUB16.1,ENA08.4,LI04.1,MAA10.7,MAB10.7,MAB07.2,ÄI08.2,ÄI08.2,MU3.1",
  "25,HI11.1,PS05.2,FY07.2,ENA12.1,KU06.1,LNT21.1,MAA17.1,MAA10.5,ÄI08.3,ÄI08.8,ÄI11.3,YH07.1,BI04.1,UE06.2",
  "26,KE05.1,RUB17.3,ENA06.1,ENA07.5,OPO2.14[ULT],OPO2.2[SEP],OPO2.3[VÄH],OPO2.4[KOI],OPO2.5[PIH],LI10.1,MAA10.6,MAB08.2,S208.1,ÄI08.4,GE06.1,MAA13.3",
  "27,HI12.1,PS07.1,FY07.3,OPO2.6[KOI],OPO2.7[PIH],OPO2.8[ULT],OPO2.9[VÄH],OPO2.13[SEP],IT09.1,ÄI08.5,RUB13.1",
  "28,IT10.1,IT10.1,ÄI13.1,ET02.1",
  "28PE,LI09.1",
  "28TI,LI12.1",
  "28TO,LI06.1,LI07.1,MU05.1,MU09.1",
  "31,RUB111.2,RUB15.1,ENA13.2,ENA11.10,UV16.1,MAA13.4,MAA16.6,FY12.1,LNT16.1,ÄI09.6,ÄI09.9,ÄI08.12",
  "32,PS06.5,HI07.3,FY08.3,BI06.4,HI06.2,ENA08.6,ENA11.9,UV22.1,UV25.1,BI09.1,LNT14.1,MAA13.5,S209.1,ÄI09.8,OPO3.2",
  "33,EAB28.1,BI06.5,HI09.1,UE02.1,YH03.3,RUB19.5,ENA07.7,ENA11.7,MAA16.5,MAB08.3,ÄI07.4,ÄI09.4,ÄI09.5",
  "34,UE07.2,YH05.3,KE06.3,GE05.2,TE04.2,SAB28.1,RUB19.4,KU05.1,MAA16.4,MAB10.3,ÄI09.10,ÄI11.5,MAA16.2",
  "35,FY13.1,LNT17.1,HI03.2,SAA07.1,RUB19.3,ENA11.8,LI05.1,MAA16.3,MAB10.4,ÄI09.11,ÄI09.12,ÄI11.4,VEB38.1",
  "36,RUB110.2,ENA10.3,ENA11.11,KU13.1,MU08.1,MAA13.6,MAA16.7,MAB10.5,ÄI09.2,ÄI09.3,ENA14.2,RAB38.1",
  "37,PS06.4,FI05.1,HI07.2,FY08.2,BI06.3,MU04.1,ÄI09.7",
  "38,AT02.1",
  "38PE,LI09.1",
  "38TO,LI06.1,LI07.1,MU05.1,MU09.1",
  "41,UV17.1",
  "42,UV23.1,UV13.1",
  "48,FY10.1,LNT10.1,LI08.1",
  "48TO,LI06.1,LI07.1",
  "51,UV18.1",
  "52,UV19.1",
  "53,BI07.1,LNT12.1",
];

function Cell({ value }) {
  return (
    <div>
      <p>{value}</p>
    </div>
  );
}

// get rows from rowgenerator
function Leak() {
  let rows = [];
  for (let i = 0; i < leakInfo.length; i++) {
    rows = [rows, <RowGenerator key={undefined} rowNumber={i} />];
  }
  return (
    <div className=" mx-auto my-10 w-5/6">
      <div className="">
        <div className="">{rows}</div>
      </div>
    </div>
  );
}

// this is one row of leak elements
// you can change here single element colors, padding and margins
// generates reow, where first array item is title and others use flex-wrap to fit in viewport
function RowGenerator({ rowNumber }) {
  let infoArray = leakInfo[rowNumber].split(",");

  let rowName = infoArray.shift();

  let componentList = [];

  infoArray.forEach((element) => {
    componentList = [
      componentList,
      <div key={undefined} className="text-sm px-1 m-1 text-nord4 bg-nord0">
        {element}
      </div>,
    ];
  });

  return (
    <div className=" bg-nord2 my-1 flex flex-row ">
      <p className="w-10 mx-1 my-auto text-center text-nord5">{rowName}</p>
      <div className="flex flex-wrap">{componentList}</div>
    </div>
  );
}

export default function Kurssitarjotin() {
  return (
    <div className="bg-nord0 h-full min-h-screen space-y-8">
      <Head>
        <title>Porin Lukio - Kurssitarjotin 22</title>
        <meta
          name="description"
          content="Porin lukion vuoden 2022-2023 kurssitarjotin"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="font-sans space-y-8">
        <Header />
        <div className="text-nord4">
          <h1 className="text-4xl font-bold text-center">
            Porin lukion kurssitarjotin
          </h1>
          <h2 className="text-2xl mt-3 font-bold text-center">2022-2023</h2>
          <div className="mt-3 w-5/6 mx-auto">
            <p className="text-center ">
              Tähän versioon saattaa tulla vielä muutoksia, jos koulu niin
              päättää.
            </p>
            <p className=" text-center text-xs mt-2">
              päivitetty 12.5.2022 klo 11.00
            </p>
            <p className=" text-center text-xs mt-2">
              (Listätty kurssinumeroita rivien loppuun, muutettu joidenkin
              ranskankurssien paikkoja, lisätty muutamia kursseja, lisätty
              opo-kursseihin opettajien nimilyhdenteet)
            </p>
          </div>
          <Leak />
        </div>
        <div className="px-8 flex justify-center text-nord4">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold flex justify-center">
              Tuntikiertokaavio
            </h2>
            <div className="space-y-8">
              <div className="grid grid-cols-6 grid-rows-6 gap-4 ">
                <p>Tunti</p>
                <p>Ma</p>
                <p>Ti</p>
                <p>Ke</p>
                <p>To</p>
                <p>Pe</p>

                <p>08:30-09:45</p>
                <p>7</p>
                <p></p>
                <p>1</p>
                <p>2</p>
                <p>1</p>

                <p>10:05-11:20</p>
                <p>5</p>
                <p>2</p>
                <p>2</p>
                <p>3</p>
                <p>3</p>

                <p>11:45-13:15</p>
                <p>4</p>
                <p>5</p>
                <p>4</p>
                <p>5</p>
                <p>4</p>

                <p>13:30-14:45</p>
                <p>3</p>
                <p>6</p>
                <p>6</p>
                <p>7</p>
                <p>6</p>

                <p>14:50-16:15</p>
                <p>1</p>
                <p>8, 8 ti</p>
                <p>7</p>
                <p>8, 8 to</p>
                <p>8, 8 pe</p>
              </div>
            </div>
          </div>
        </div>
        <Breaker />
        <Footer />
      </div>
    </div>
  );
}

// test commit
