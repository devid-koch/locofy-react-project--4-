import { FunctionComponent, useState, useCallback } from "react";


import Frame from "../components/Frame";

import PortalPopup from "../components/PortalPopup";
import CountdownTimer from "../components/Countdowntimer";
import TakeNoteComponent from "../components/TakeNoteComponent";

const FocusRoom: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer8Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component199Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="relative bg-gray-100 w-full h-[2037px] overflow-y-auto text-center text-3xs text-white font-poppins">
        <div className="absolute top-[590px] right-[-345px] rounded-[50%] bg-gray-100 [filter:blur(250px)] box-border w-[537px] h-[537px] border-[69px] border-solid border-cornflowerblue" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_815px)] w-[100vw] h-[1024px] object-cover "
          alt=""
          src="/image-13@2x.png"
        />
        <img
          className="absolute top-[729.2px] left-[calc(50%_-_190px)] rounded-57xl w-[380px] h-[60.8px] overflow-hidden object-contain"
          alt=""
          src="/music-bar@2x.png"
        />
        <div className="absolute top-[0px] right-[0px] flex flex-col items-end justify-start pt-5 pb-0 pr-5 pl-[200px] gap-[35px]">
          <div className="relative w-[75px] h-[75px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(88.96deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] shadow-[0.5px_0.5px_2px_rgba(5,_72,_169,_0.5)_inset] box-border border-[0.5px] border-solid border-deepskyblue-100" />
              <div className="absolute top-[calc(50%_+_15.5px)] left-[calc(50%_-_14.5px)] w-[30px] h-[30px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row flex-wrap items-center justify-center">
                  <div className="relative w-[30px] h-[30px] [transform:_rotate(-90deg)]">
                    <img
                      className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[30px] object-cover [transform:_rotate(90deg)]"
                      alt=""
                      src="/more@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[75px] h-[75px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border border-[1px] border-solid border-deepskyblue-200" />
              <img
                className="absolute h-[66.67%] w-[66.67%] top-[17.33%] right-[16%] bottom-[16%] left-[17.33%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/wiredlineal54photo-1@2x.png"
              />
              <div className="absolute h-[76%] w-[82.67%] top-[12%] right-[8%] bottom-[12%] left-[9.33%] opacity-[0]">
                <img
                  className="absolute top-[0px] left-[4px] w-[50px] h-[50px] object-cover"
                  alt=""
                  src="/wiredflat54photo-1-1@2x.png"
                />
                <div className="absolute top-[42px] left-[0px] font-medium">
                  Background
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[75px] h-[75px] text-6xs">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border border-[1px] border-solid border-deepskyblue-200" />
              <div className="absolute h-[96%] w-[78.67%] top-[0%] right-[10.67%] bottom-[4%] left-[10.67%] opacity-[0]">
                <img
                  className="absolute top-[0px] left-[4px] w-[50px] h-[50px] object-cover"
                  alt=""
                  src="/wiredflat54photo-1-1@2x.png"
                />
                <div className="absolute top-[42px] left-[9px] font-medium">
                  <p className="m-0">Task</p>
                  <p className="m-0">Aggregator</p>
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_25px)] w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/wiredlineal1459oldshop-2@2x.png"
              />
            </div>
          </div>
          <div className="rounded-6xl [background:linear-gradient(270deg,_#010711,_#052554)] shadow-[2px_2px_10px_rgba(50,_183,_246,_0.25)_inset] overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[25px] pb-[31px] gap-[15px] text-left text-sm border-[1px] border-solid border-dark-stroke">
            <div className="flex w-[272px] text-base justify-between">
              <div className="flex gap-3">
                <div>
                <i className="fa fa-angle-right text-xl font-bold" aria-hidden="true"></i>
              </div>
              <div>
              <img src="./src/assets/Note.png" alt=""/>
              </div>
              <div className="relative font-medium">
                  Take Notes
              </div>
            </div>
              <div className="absolute top-[0px] left-[calc(50%_+_13.5px)] flex flex-row items-center justify-center gap-[10px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[25px] h-[25px] overflow-hidden shrink-0 object-contain [transform:_rotate(-180deg)]"
                  alt=""
                  src="/wiredlineal245editdocument-2@2x.png"
                />
              </div>
            </div>
            <div className="relative w-[154px] h-[21px]">
              <div className="absolute top-[0px] left-[0px]">
                <span>{`Current task - `}</span>
                <span className="font-semibold">Biology</span>
              </div>
            </div>
            <div className="relative rounded-xl bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke">
              <div className="absolute top-[15px] left-[20px] w-[89px] h-[21px]">
                <div className="absolute top-[calc(50%_-_10.5px)] left-[0px]">
                <input className= "text-[#ffffff] placeholder-white bg-[#0b316e] border-none outline-none bg-opacity-0 " type="text" placeholder="New Note" />
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_10px)] right-[20px] w-5 h-5 object-cover"
                alt=""
                src="/vector@2x.png"
              />
            </div>
            <div
              className="relative rounded-xl bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-y-auto shrink-0 cursor-pointer border-[1px] border-solid border-dark-stroke"
              onClick={onFrameContainer8Click}
            >
              <div className="absolute top-[15px] left-[20px]">
                Cell structure
              </div>
              <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden" />
              <img
                className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                alt=""
                src="/arrow-4@2x.png"
              />
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center">
              <div className="relative font-medium">Previous task notes</div>
            </div>
            <div className="relative rounded-xl bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke">
              <div className="absolute top-[15px] left-[20px] w-[89px] h-[21px]">
                <div className="absolute top-[calc(50%_-_10.5px)] left-[0px] font-semibold">
                  Physics
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                alt=""
                src="/arrow-4@2x.png"
              />
            </div>
          </div>
          {/* <div className=""><TakeNoteComponent/></div> */}
        </div>
        <div className="absolute top-[125px] left-[115px] [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] w-[795px] h-[495px] text-[31.28px]">
        <b className="absolute top-[calc(50%_-_28.93px)] left-[calc(50%_-_86.79px)] text-[39.09px] text-left">
                {/* 00:50:02 */}<CountdownTimer durationInSeconds={120} /> {/* Set your desired duration */}
              </b>
          
              {/* <img
                className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
                alt=""
                src="/frame-761@2x.png"
              /> */}
              {/* <div className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray-200 shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] [backdrop-filter:blur(10px)] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue" /> */}
              {/* <div className="absolute top-[94.61px] left-[calc(50%_-_74.09px)] font-medium">
                Chapter 1
              </div> */}
              
              {/* <img
                className="absolute h-[8.23%] w-[26.75%] top-[66.87%] right-[36.63%] bottom-[24.9%] left-[36.63%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-333@2x.png"
              /> */}
              {/* <img
                className="absolute h-[6.17%] w-[5.86%] top-[46.91%] right-[87.96%] bottom-[46.91%] left-[6.17%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group@2x.png"
              /> */}

        </div>
        <div className="absolute top-[446px] right-[1309px] rounded-[50%] bg-cornflowerblue [filter:blur(250px)] w-[399px] h-[399px]" />
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(177.47deg,_rgba(1,_7,_17,_0.5),_rgba(1,_7,_17,_0))] w-[115px] h-[1024px] text-left text-[20px]">
          <div className="absolute top-[41px] left-[30px] [background:linear-gradient(269.87deg,_rgba(1,_7,_17,_0),_rgba(1,_7,_17,_0.5)_42.69%,_rgba(1,_7,_17,_0))] flex flex-row items-center justify-start">
            <img
              className="relative w-[45px] h-[34px] object-cover"
              alt=""
              src="/logo-1@2x.png"
            />
            <div className="relative font-medium">Focus Realm</div>
          </div>
          <div className="absolute top-[115px] left-[20px] flex flex-col items-center justify-center gap-[40px] text-center text-3xs">
            <div className="relative w-[75px] h-[75px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border hidden border-[1px] border-solid border-deepskyblue-200" />
              <div className="absolute h-[86.67%] w-[78.67%] top-[6.67%] right-[10.67%] bottom-[6.67%] left-[10.67%] opacity-[0]">
                <div className="absolute top-[50px] left-[0px] font-medium">
                  Focus room
                </div>
                <img
                  className="absolute top-[4px] left-[4px] w-[50px] h-[50px] object-cover"
                  alt=""
                  src="/wiredflat54photo-1-1@2x.png"
                />
              </div>
              <img
                className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_25px)] w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/wiredlineal134target-2@2x.png"
              />
            </div>
            <div className="relative w-[31px] h-10">
              <img
                className="absolute top-[0px] left-[calc(50%_-_10.5px)] w-5 h-5 object-cover"
                alt=""
                src="/info@2x.png"
              />
              <div className="absolute top-[25px] left-[0px] font-medium">
                About
              </div>
            </div>
            <div className="relative w-[75px] h-[75px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border hidden border-[1px] border-solid border-deepskyblue-200" />
              <div className="absolute h-[86.67%] w-[66.67%] top-[6.67%] right-[17.33%] bottom-[6.67%] left-[16%] opacity-[0]">
                <img
                  className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                  alt=""
                  src="/wiredflat54photo-1-1@2x.png"
                />
                <div className="absolute top-[50px] left-[10px] font-medium">
                  Profile
                </div>
              </div>
              <img
                className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[18%] bottom-[16.67%] left-[15.33%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/wiredlineal268avatarman-1-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-[1111px] left-[185px] w-[1070px] h-[730px] text-left text-17xl"
          data-scroll-to="component199Container"
        >
          <div className="absolute top-[0px] left-[0px] font-semibold">
            All Notes
          </div>
          <div className="absolute top-[54px] left-[0px] w-[1070px] flex flex-row flex-wrap items-start justify-start pt-[100px] px-0 pb-0 box-border gap-[85px] text-base">
            <div className="rounded-6xl bg-darkslateblue-400 shadow-[0px_3px_50px_rgba(1,_72,_183,_0.65)] box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[25px] pb-[25px] gap-[10px] max-h-[300px] z-[0] text-6xl border-[1px] border-solid border-darkgray">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[15px]">
                <div className="relative">Biology</div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 text-base border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Cell structure
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
              </div>
              <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 text-base border-[1px] border-solid border-darkgray">
                <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                  Add new note
                </div>
                <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                  <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                    Every cell is enclosed within a cell membrane that separates
                    its cytoplasm from the extracellular space. A cell membrane
                    consists of a lipid bilayer, including cholesterols that sit
                    between phospholipids to maintain their fluidity at various
                    temperatures. Cell membranes are semipermeable, allowing
                    small molecules such as oxygen, carbon dioxide, and water to
                    pass through while restricting the movement of larger
                    molecules and charged particles such as ions. Cell membranes
                    also contains membrane proteins, including integral membrane
                    proteins that go across the membrane serving as membrane
                    transporters, and peripheral proteins that loosely attach to
                    the outer side of the cell membrane, acting as enzymes
                    shaping the cell. Cell membranes are involved in various
                    cellular processes such as cell adhesion, storing electrical
                    energy, and cell signalling and serve as the attachment
                    surface for several extracellular structures such as a cell
                    wall, glycocalyx, and cytoskeleton.
                  </div>
                </div>
                <img
                  className="absolute top-[calc(50%_-_10px)] right-[20px] w-5 h-5 object-cover"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
            </div>
            <div className="relative rounded-6xl bg-darkslateblue-300 shadow-[0px_3px_50px_rgba(1,_72,_183,_0.65)] box-border w-[300px] h-[123px] overflow-hidden shrink-0 opacity-[0] max-h-[300px] z-[1] border-[1px] border-solid border-darkgray" />
            <div className="relative rounded-6xl bg-darkslateblue-300 shadow-[0px_3px_50px_rgba(1,_72,_183,_0.65)] box-border w-[300px] h-[123px] overflow-hidden shrink-0 opacity-[0] max-h-[300px] z-[2] border-[1px] border-solid border-darkgray" />
            <div className="rounded-6xl bg-darkslateblue-400 shadow-[0px_3px_50px_rgba(1,_72,_183,_0.65)] overflow-y-auto flex flex-col items-start justify-start pt-2.5 px-[25px] pb-[25px] z-[3] border-[1px] border-solid border-darkgray">
              <div className="h-[233px] shrink-0 flex flex-col items-start justify-start gap-[15px]">
                <div className="relative text-6xl">Physics</div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 1
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 2
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 3
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 4
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] w-5 h-0 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-6xl bg-darkslateblue-400 shadow-[0px_3px_50px_rgba(1,_72,_183,_0.65)] box-border w-[300px] h-[268px] overflow-hidden shrink-0 z-[4] border-[1px] border-solid border-darkgray">
              <div className="absolute top-[10px] left-[25px] h-[233px] flex flex-col items-start justify-start gap-[15px]">
                <div className="relative text-6xl">Chemistry</div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 1
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 2
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 3
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 4
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] w-5 h-0 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-6xl bg-darkslateblue-400 shadow-[0px_3px_50px_rgba(1,_72,_183,_0.65)] box-border w-[300px] h-[268px] overflow-hidden shrink-0 z-[5] border-[1px] border-solid border-darkgray">
              <div className="absolute top-[10px] left-[25px] h-[233px] flex flex-col items-start justify-start gap-[15px]">
                <div className="relative text-6xl">English</div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 1
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 2
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 3
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
                <div className="relative rounded-xl bg-darkslateblue-100 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[250px] h-[50px] overflow-y-auto shrink-0 border-[1px] border-solid border-darkgray">
                  <div className="absolute top-[calc(50%_-_12px)] left-[16px]">
                    Chapter 4
                  </div>
                  <div className="absolute top-[54px] left-[20px] w-[232px] h-[522px] overflow-hidden text-xs">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[232px]">
                      Every cell is enclosed within a cell membrane that
                      separates its cytoplasm from the extracellular space. A
                      cell membrane consists of a lipid bilayer, including
                      cholesterols that sit between phospholipids to maintain
                      their fluidity at various temperatures. Cell membranes are
                      semipermeable, allowing small molecules such as oxygen,
                      carbon dioxide, and water to pass through while
                      restricting the movement of larger molecules and charged
                      particles such as ions. Cell membranes also contains
                      membrane proteins, including integral membrane proteins
                      that go across the membrane serving as membrane
                      transporters, and peripheral proteins that loosely attach
                      to the outer side of the cell membrane, acting as enzymes
                      shaping the cell. Cell membranes are involved in various
                      cellular processes such as cell adhesion, storing
                      electrical energy, and cell signalling and serve as the
                      attachment surface for several extracellular structures
                      such as a cell wall, glycocalyx, and cytoskeleton.
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_0px)] right-[20px] w-5 h-0 object-cover"
                    alt=""
                    src="/arrow-4@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[30px] left-[0px] text-11xl font-medium z-[6]">
              Current task notes
            </div>
            <div className="absolute my-0 mx-[!important] top-[333px] left-[0px] text-11xl font-medium z-[7]">
              Previous notes
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup    
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          {/* <Frame onClose={closeFrame} /> */}
        </PortalPopup>
      )}
    </>
  );
};

export default FocusRoom;
