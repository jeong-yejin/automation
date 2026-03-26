import svgPaths from "./svg-xnlsmx2ifn";
import imgFrame5518 from "figma:asset/c8a541adabbe9e4a0605b7cfe1900c7a70aad76a.png";

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#ff4b00] text-[21.282px] whitespace-nowrap">Calendar</p>
    </div>
  );
}

function TabOutlineMenu() {
  return (
    <div className="h-full relative shrink-0" data-name="Tab / Outline Menu">
      <div aria-hidden="true" className="absolute border-[#ff4b00] border-b-[1.773px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[14.188px] relative">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#ff4b00] text-[12.414px] whitespace-nowrap">Monthly</p>
        </div>
      </div>
    </div>
  );
}

function TabOutlineMenu1() {
  return (
    <div className="h-full relative shrink-0" data-name="Tab / Outline Menu">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[14.188px] relative">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#727272] text-[12.414px] whitespace-nowrap">Weekly</p>
        </div>
      </div>
    </div>
  );
}

function TabOutlineMenu2() {
  return (
    <div className="h-full relative shrink-0" data-name="Tab / Outline Menu">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[14.188px] relative">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#727272] text-[12.414px] whitespace-nowrap">Daily</p>
        </div>
      </div>
    </div>
  );
}

function TabOutlineTabs() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Tab / Outline Tabs">
      <TabOutlineMenu />
      <TabOutlineMenu1 />
      <TabOutlineMenu2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[31.923px] h-[61.185px] items-center relative shrink-0" data-name="Content">
      <Title />
      <TabOutlineTabs />
    </div>
  );
}

function IconFunnel() {
  return (
    <div className="relative shrink-0 size-[14.188px]" data-name="Icon/Funnel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1879 14.1879">
        <g id="Icon/Funnel">
          <g id="Vector" />
          <path d={svgPaths.p35b3380} id="Vector_2" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33012" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white content-stretch flex gap-[7.094px] items-center justify-center px-[10.641px] py-[7.094px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <div aria-hidden="true" className="absolute border-[#ff4b00] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none rounded-[4.444px]" />
      <IconFunnel />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#ff4b00] text-[12.414px] whitespace-nowrap">{`Filter `}</p>
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[14.188px]" data-name="Icon/Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1879 14.1879">
        <g id="Icon/Plus">
          <path d="M11.9711 7.09396H2.21686" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33012" />
          <path d="M7.09396 11.9711V2.21686" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33012" />
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#ff4b00] content-stretch flex gap-[7.094px] items-center justify-center px-[10.641px] py-[7.094px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <IconPlus />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[12.414px] text-white whitespace-nowrap">Add Event</p>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[14.188px] items-center relative shrink-0" data-name="Action">
      <Buttons />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#e4e4e4] h-full shrink-0 w-[0.887px]" data-name="Separator" />
      </div>
      <Buttons1 />
    </div>
  );
}

function HeaderSectionHeader() {
  return (
    <div className="absolute bg-white content-stretch flex h-[61px] items-center justify-between left-[0.25px] px-[28.376px] top-px w-[1057px]" data-name="Header / Section Header">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.887px] border-solid inset-[0_0_-0.444px_0] pointer-events-none" />
      <Content />
      <Action />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[7.094px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#ff4b00] text-[17.735px] whitespace-nowrap">September 2023</p>
      <div className="relative shrink-0 size-[14.188px]" data-name="Icon/CaretDown">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[37.5%_18.75%_31.25%_18.75%]" data-name="Vector">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1976 5.76384">
              <path d={svgPaths.p3ee0b800} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33012" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCaretLeft() {
  return (
    <div className="relative shrink-0 size-[12.414px]" data-name="Icon/CaretLeft">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4144 12.4144">
        <g id="Icon/CaretLeft">
          <g id="Vector" />
          <path d={svgPaths.p1faddc40} id="Vector_2" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33012" />
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[rgba(255,75,0,0.06)] content-stretch flex items-center justify-center p-[7.981px] relative rounded-[3.57px] shrink-0 w-[28.376px]" data-name="Buttons">
      <div aria-hidden="true" className="absolute border-0 border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[3.57px]" />
      <IconCaretLeft />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#ff4b00] content-stretch flex items-center justify-center px-[10.641px] py-[7.094px] relative rounded-[3.57px] shrink-0" data-name="Buttons">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[10.641px] text-white whitespace-nowrap">Today</p>
    </div>
  );
}

function IconCaretRight() {
  return (
    <div className="relative shrink-0 size-[12.414px]" data-name="Icon/CaretRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4144 12.4144">
        <g id="Icon/CaretRight">
          <path d={svgPaths.p11175320} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33012" />
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-[rgba(255,75,0,0.06)] content-stretch flex items-center justify-center p-[7.981px] relative rounded-[3.57px] shrink-0 w-[28.376px]" data-name="Buttons">
      <div aria-hidden="true" className="absolute border-0 border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[3.57px]" />
      <IconCaretRight />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[7.094px] items-center justify-center relative shrink-0" data-name="Pagination">
      <Buttons2 />
      <Buttons3 />
      <Buttons4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <Pagination />
    </div>
  );
}

function Date() {
  return (
    <div className="absolute content-stretch flex gap-[21.282px] items-center left-[-0.17px] px-[28.376px] py-[21.282px] top-[62.19px] w-[1057px]" data-name="Date">
      <Frame6 />
      <div className="flex flex-row items-center self-stretch">
        <Frame7 />
      </div>
    </div>
  );
}

function TableBaseHeader() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Sun</p>
        </div>
      </div>
    </div>
  );
}

function TableBaseHeader1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Mon</p>
        </div>
      </div>
    </div>
  );
}

function TableBaseHeader2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Tue</p>
        </div>
      </div>
    </div>
  );
}

function TableBaseHeader3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Wed</p>
        </div>
      </div>
    </div>
  );
}

function TableBaseHeader4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Thu</p>
        </div>
      </div>
    </div>
  );
}

function TableBaseHeader5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Fri</p>
        </div>
      </div>
    </div>
  );
}

function TableBaseHeader6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table / Base / Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.641px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#727272] text-[12.414px] text-ellipsis whitespace-nowrap">Sat</p>
        </div>
      </div>
    </div>
  );
}

function CalendarCalendarBar() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start relative rounded-[3.547px] shrink-0 w-[1000.248px]" data-name="Calendar / Calendar Bar">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-0 pointer-events-none rounded-[3.547px]" />
      <TableBaseHeader />
      <TableBaseHeader1 />
      <TableBaseHeader2 />
      <TableBaseHeader3 />
      <TableBaseHeader4 />
      <TableBaseHeader5 />
      <TableBaseHeader6 />
    </div>
  );
}

function CalendarEventCardsCalendarTile() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#afafaf] text-[12.414px] text-ellipsis whitespace-nowrap">28</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#afafaf] text-[12.414px] text-ellipsis whitespace-nowrap">29</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#afafaf] text-[12.414px] text-ellipsis whitespace-nowrap">30</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">1</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel() {
  return (
    <div className="bg-[#feeded] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#dc2626] text-[10.641px] text-ellipsis whitespace-nowrap">Design Review</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel />
    </div>
  );
}

function CalendarEventCardsCalendarTile4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">2</p>
      <Row />
    </div>
  );
}

function CalendarEventCardsCalendarTile5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">3</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">4</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row 01">
      <CalendarEventCardsCalendarTile />
      <CalendarEventCardsCalendarTile1 />
      <CalendarEventCardsCalendarTile2 />
      <CalendarEventCardsCalendarTile3 />
      <CalendarEventCardsCalendarTile4 />
      <CalendarEventCardsCalendarTile5 />
      <CalendarEventCardsCalendarTile6 />
    </div>
  );
}

function CalendarEventCardsCalendarTile7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">4</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel1() {
  return (
    <div className="bg-[#f7f7e8] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic p-[3.547px] relative text-[#b1ab1d] text-[10.641px] text-ellipsis w-full whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0">Meeting</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal overflow-hidden relative shrink-0">11:30 - 13.00</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel1 />
    </div>
  );
}

function CalendarEventCardsCalendarTile8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">5</p>
      <Row1 />
    </div>
  );
}

function CalendarEventCardsCalendarTile9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">6</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">7</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">8</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel2() {
  return (
    <div className="bg-[#feeded] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic p-[3.547px] relative text-[10.641px] text-ellipsis w-full whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[#dc2626]">Design Review</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#af4b4b]">10:00 - 11.00</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel3() {
  return (
    <div className="bg-[#f4edf7] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic p-[3.547px] relative text-[#954baf] text-[10.641px] text-ellipsis w-full whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0">Discussion</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal overflow-hidden relative shrink-0">10:00 - 11.00</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel2 />
      <CalendarEventCardsNotesLabel3 />
    </div>
  );
}

function CalendarEventCardsCalendarTile12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">9</p>
      <Row2 />
    </div>
  );
}

function Row3() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px w-full" data-name="Row" />;
}

function CalendarEventCardsCalendarTile13() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">10</p>
      <Row3 />
    </div>
  );
}

function Row11() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row 02">
      <CalendarEventCardsCalendarTile7 />
      <CalendarEventCardsCalendarTile8 />
      <CalendarEventCardsCalendarTile9 />
      <CalendarEventCardsCalendarTile10 />
      <CalendarEventCardsCalendarTile11 />
      <CalendarEventCardsCalendarTile12 />
      <CalendarEventCardsCalendarTile13 />
    </div>
  );
}

function CalendarEventCardsCalendarTile14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">11</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">12</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile16() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">13</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel4() {
  return (
    <div className="bg-[#eef5f0] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#259800] text-[10.641px] text-ellipsis whitespace-nowrap">Market Research</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel5() {
  return (
    <div className="bg-[#f4edf7] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#954baf] text-[10.641px] text-ellipsis whitespace-nowrap">Discussion</p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel4 />
      <CalendarEventCardsNotesLabel5 />
    </div>
  );
}

function CalendarEventCardsCalendarTile17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">14</p>
      <Row4 />
    </div>
  );
}

function CalendarEventCardsCalendarTile18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">15</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile19() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">16</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile20() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">17</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row 03">
      <CalendarEventCardsCalendarTile14 />
      <CalendarEventCardsCalendarTile15 />
      <CalendarEventCardsCalendarTile16 />
      <CalendarEventCardsCalendarTile17 />
      <CalendarEventCardsCalendarTile18 />
      <CalendarEventCardsCalendarTile19 />
      <CalendarEventCardsCalendarTile20 />
    </div>
  );
}

function CalendarEventCardsCalendarTile21() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">18</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel6() {
  return (
    <div className="bg-[#feeded] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#dc2626] text-[10.641px] text-ellipsis whitespace-nowrap">Design Review</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel7() {
  return (
    <div className="bg-[#fbf4ec] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#d28e3d] text-[10.641px] text-ellipsis whitespace-nowrap">New Deals</p>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel6 />
      <CalendarEventCardsNotesLabel7 />
    </div>
  );
}

function CalendarEventCardsCalendarTile22() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">19</p>
      <Row5 />
    </div>
  );
}

function CalendarEventCardsCalendarTile23() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">20</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile24() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">21</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel8() {
  return (
    <div className="bg-[#f7f7e8] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#b1ab1d] text-[10.641px] text-ellipsis whitespace-nowrap">Meeting</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel9() {
  return (
    <div className="bg-[#feeded] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#dc2626] text-[10.641px] text-ellipsis whitespace-nowrap">Design Review</p>
        </div>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel8 />
      <CalendarEventCardsNotesLabel9 />
    </div>
  );
}

function CalendarEventCardsCalendarTile25() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">22</p>
      <Row6 />
    </div>
  );
}

function CalendarEventCardsCalendarTile26() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">23</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile27() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">24</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row 04">
      <CalendarEventCardsCalendarTile21 />
      <CalendarEventCardsCalendarTile22 />
      <CalendarEventCardsCalendarTile23 />
      <CalendarEventCardsCalendarTile24 />
      <CalendarEventCardsCalendarTile25 />
      <CalendarEventCardsCalendarTile26 />
      <CalendarEventCardsCalendarTile27 />
    </div>
  );
}

function Row7() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Row" />;
}

function CalendarEventCardsCalendarTile28() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">25</p>
      <Row7 />
    </div>
  );
}

function CalendarEventCardsCalendarTile29() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">26</p>
    </div>
  );
}

function CalendarEventCardsCalendarTile30() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">27</p>
    </div>
  );
}

function CalendarEventCardsNotesLabel10() {
  return (
    <div className="bg-[#f7f7e8] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#b1ab1d] text-[10.641px] text-ellipsis whitespace-nowrap">Meeting</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel11() {
  return (
    <div className="bg-[#f7eded] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#af4b4b] text-[10.641px] text-ellipsis whitespace-nowrap">Design Review</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel12() {
  return (
    <div className="bg-[#fbf4ec] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#d28e3d] text-[10.641px] text-ellipsis whitespace-nowrap">New Deals</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel13() {
  return (
    <div className="bg-[#f4edf7] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#954baf] text-[10.641px] text-ellipsis whitespace-nowrap">Discussion</p>
        </div>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel10 />
      <CalendarEventCardsNotesLabel11 />
      <CalendarEventCardsNotesLabel12 />
      <CalendarEventCardsNotesLabel13 />
    </div>
  );
}

function CalendarEventCardsCalendarTile31() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">28</p>
      <Row8 />
    </div>
  );
}

function Row9() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Row" />;
}

function CalendarEventCardsCalendarTile32() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">29</p>
      <Row9 />
    </div>
  );
}

function CalendarEventCardsNotesLabel14() {
  return (
    <div className="bg-[#f7f7e8] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#b1ab1d] text-[10.641px] text-ellipsis whitespace-nowrap">Meeting</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel15() {
  return (
    <div className="bg-[#feeded] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#dc2626] text-[10.641px] text-ellipsis whitespace-nowrap">Design Review</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel16() {
  return (
    <div className="bg-[#fbf4ec] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#d28e3d] text-[10.641px] text-ellipsis whitespace-nowrap">New Deals</p>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCardsNotesLabel17() {
  return (
    <div className="bg-[#f4edf7] relative shadow-[-2.66px_0px_10.641px_0px_rgba(31,31,31,0.02)] shrink-0 w-full" data-name="Calendar / Event Cards / Notes Label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[3.547px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic overflow-hidden relative shrink-0 text-[#954baf] text-[10.641px] text-ellipsis whitespace-nowrap">Discussion</p>
        </div>
      </div>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Row">
      <CalendarEventCardsNotesLabel14 />
      <CalendarEventCardsNotesLabel15 />
      <CalendarEventCardsNotesLabel16 />
      <CalendarEventCardsNotesLabel17 />
    </div>
  );
}

function CalendarEventCardsCalendarTile33() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">30</p>
      <Row15 />
    </div>
  );
}

function Row16() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Row" />;
}

function CalendarEventCardsCalendarTile34() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10.641px] h-[141.879px] items-start p-[14.188px] relative shrink-0 w-[142.893px]" data-name="Calendar / Event Cards / Calendar Tile">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-[-0.444px] pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12.414px] text-black text-ellipsis whitespace-nowrap">31</p>
      <Row16 />
    </div>
  );
}

function Row14() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row 05">
      <CalendarEventCardsCalendarTile28 />
      <CalendarEventCardsCalendarTile29 />
      <CalendarEventCardsCalendarTile30 />
      <CalendarEventCardsCalendarTile31 />
      <CalendarEventCardsCalendarTile32 />
      <CalendarEventCardsCalendarTile33 />
      <CalendarEventCardsCalendarTile34 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative rounded-[7.094px] shrink-0 w-[1000.248px]" data-name="Calendar">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Row10 />
        <Row11 />
        <Row12 />
        <Row13 />
        <Row14 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.887px] border-solid inset-0 pointer-events-none rounded-[7.094px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.641px] items-start left-[-0.17px] pb-[28.376px] px-[28.376px] top-[134.01px]" data-name="Container">
      <CalendarCalendarBar />
      <Calendar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-0.17px] top-px">
      <HeaderSectionHeader />
      <Date />
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-white h-[955px] left-[222.75px] overflow-clip top-[64px] w-[1057px]">
      <Group />
    </div>
  );
}

function IconMagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[18.589px]" data-name="Icon/MagnifyingGlass">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5893 18.5893">
        <g id="Icon/MagnifyingGlass">
          <g id="Vector" />
          <path d={svgPaths.p3aef5f00} id="Vector_2" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
          <path d={svgPaths.p47bf00} id="Vector_3" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[11.154px] items-center relative shrink-0">
      <IconMagnifyingGlass />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#afafaf] text-[13.012px] whitespace-nowrap">Search</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,75,0,0.06)] content-stretch flex items-center justify-center relative rounded-[1.859px] shrink-0 size-[18.589px]">
      <div className="relative shrink-0 size-[14.871px]" data-name="Icon/Command">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[18.75%_18.75%_59.38%_59.38%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64731 4.64731">
              <path d={svgPaths.p23d91080} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[18.75%_59.38%_59.38%_18.75%] items-center justify-center">
          <div className="flex-none rotate-180 size-[4.88px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-21.43%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64731 4.64731">
                  <path d={svgPaths.pf8e7dc0} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[59.38%_18.75%_18.75%_59.38%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64731 4.64731">
              <path d={svgPaths.pf8e7dc0} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[59.38%_59.38%_18.75%_18.75%] items-center justify-center">
          <div className="flex-none rotate-180 size-[4.88px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-21.43%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64731 4.64731">
                  <path d={svgPaths.p23d91080} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[40.63%]" data-name="Vector">
          <div className="absolute inset-[-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.18258 4.18258">
              <path d={svgPaths.p27eafa00} id="Vector" stroke="var(--stroke-0, #FF4B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,75,0,0.06)] content-stretch flex items-center justify-center relative rounded-[1.859px] shrink-0 size-[18.589px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#ff4b00] text-[14.871px] whitespace-nowrap">F</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[7.436px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex items-center justify-between px-[11.154px] py-[9.295px] relative rounded-[3.718px] shrink-0 w-[334.607px]" data-name="Search Bar">
      <div aria-hidden="true" className="absolute border-[#ff4b00] border-[0.929px] border-solid inset-0 pointer-events-none rounded-[3.718px]" />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 ml-[8.67px] mt-[8px] relative row-1 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0002 16.0002">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p36967d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <circle cx="12.0002" cy="3.33337" fill="var(--fill-0, #D34645)" id="Ellipse 20" r="2.33337" stroke="var(--stroke-0, white)" strokeWidth="0.666676" />
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Notifications">
      <div className="bg-white border-[#e7eae9] border-[0.667px] border-solid col-1 h-[32px] ml-0 mt-0 rounded-[8px] row-1 w-[32.667px]" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[22.307px] shrink-0 size-[29.743px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[22.307px] size-full" src={imgFrame5518} />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[11.154px] items-center relative shrink-0" data-name="Profile">
      <Frame1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[13.012px] text-black text-center whitespace-nowrap">Harsh</p>
      <div className="relative shrink-0 size-[14.871px]" data-name="Icon/CaretDown">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[37.5%_18.75%_31.25%_18.75%]" data-name="Vector">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6888 6.04151">
              <path d={svgPaths.p3db757c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39419" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Notifications />
      <Profile />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[500px] items-center left-1/2 top-[calc(50%+0.46px)] w-[988.024px]">
      <SearchBar />
      <Frame8 />
    </div>
  );
}

function HeaderTopHeader() {
  return (
    <div className="absolute bg-white border-[#e4e4e4] border-b-[0.929px] border-solid h-[65px] right-[0.42px] top-0 w-[1057px]" data-name="Header / Top Header">
      <Frame9 />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bg-[#f2f2f2] content-stretch flex items-center justify-center left-[210.47px] rounded-[1.799px] size-[25.185px] top-[19.79px]" data-name="Slider">
      <div className="relative shrink-0 size-[17.989px]" data-name="CaretDoubleHorizontal">
        <div className="absolute flex inset-[31.25%_68.75%_31.25%_12.5%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[4.048px] rotate-90 w-[8.095px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-20%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.09514 4.72216">
                  <path d={svgPaths.p27624e80} id="Vector" stroke="var(--stroke-0, #AFAFAF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[31.25%_12.5%_31.25%_68.75%] items-center justify-center">
          <div className="flex-none h-[4.048px] rotate-90 w-[8.095px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-20%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.09514 4.72216">
                  <path d={svgPaths.p27624e80} id="Vector" stroke="var(--stroke-0, #AFAFAF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="LOGO">
      <div className="col-1 h-[20.545px] ml-0 mt-[4.06px] relative row-1 w-[21.687px]" data-name="Exclude">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6865 20.5449">
          <path d={svgPaths.p7e1b300} fill="var(--fill-0, #FF4B00)" id="Exclude" />
        </svg>
      </div>
      <p className="col-1 font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[26.84px] mt-0 relative row-1 text-[#060606] text-[22.359px] tracking-[3.1303px] uppercase whitespace-nowrap">Designo</p>
    </div>
  );
}

function LinkHome() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Home">
      <Logo1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex gap-[8.995px] h-[64.761px] items-center justify-center left-0 px-[25.185px] py-[17.989px] top-0 w-[223.066px]" data-name="Logo">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.899px] border-solid inset-0 pointer-events-none" />
      <Slider />
      <LinkHome />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[10.794px] items-center leading-[1.5] relative shrink-0 text-[#727272] w-full whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[15.145px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀑀
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[12.592px]">Dashboard</p>
    </div>
  );
}

function NavigationSidebarMenu() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[7px] py-[7.2px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function IconClipboardText() {
  return (
    <div className="relative shrink-0 size-[17.989px]" data-name="Icon/ClipboardText">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9892 17.9892">
        <g id="Icon/ClipboardText">
          <g id="Vector" />
          <path d="M6.74595 10.6811H11.2432" id="Vector_2" stroke="var(--stroke-0, #727272)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d="M6.74595 8.43243H11.2432" id="Vector_3" stroke="var(--stroke-0, #727272)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d={svgPaths.p15756c80} id="Vector_4" stroke="var(--stroke-0, #727272)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d={svgPaths.p115d0000} id="Vector_5" stroke="var(--stroke-0, #727272)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconClipboardText />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#727272] text-[12.592px] whitespace-nowrap">Assignments</p>
    </div>
  );
}

function NavigationSidebarMenu1() {
  return (
    <div className="content-stretch flex h-[32.381px] items-center justify-between px-[9px] py-[7.196px] relative rounded-[3.598px] shrink-0 w-[194.283px]" data-name="Navigation / Sidebar / Menu">
      <Content3 />
    </div>
  );
}

function IconCalendar() {
  return (
    <div className="relative shrink-0 size-[17.989px]" data-name="Icon/Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9892 17.9892">
        <g id="Icon/Calendar">
          <g id="Vector" />
          <path d={svgPaths.p1ed08d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d="M12.3676 1.68649V3.93514" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d="M5.62162 1.68649V3.93514" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d="M2.81081 6.18378H15.1784" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d={svgPaths.p217f3600} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
          <path d={svgPaths.p3750bb80} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10.794px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconCalendar />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[12.592px] text-white whitespace-nowrap">Schedule</p>
    </div>
  );
}

function NavigationSidebarMenu2() {
  return (
    <div className="bg-[#ff4b00] content-stretch flex h-[32.381px] items-center justify-between p-[7.196px] relative rounded-[3.598px] shrink-0 w-[194.283px]" data-name="Navigation / Sidebar / Menu">
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] text-[12.592px] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀱰
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0">Recordings</p>
    </div>
  );
}

function NavigationSidebarMenu3() {
  return (
    <div className="bg-[#f9f9f9] h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10.555px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀒤
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[12.592px]">Discussions</p>
    </div>
  );
}

function NavigationSidebarMenu4() {
  return (
    <div className="h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11.89px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀈕
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[12.592px]">Resources</p>
    </div>
  );
}

function NavigationSidebarMenu5() {
  return (
    <div className="h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10.794px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="relative shrink-0 size-[17.989px]" data-name="Icon/NoteBlank">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[15.63%]" data-name="Vector">
          <div className="absolute inset-[-5.45%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7168 13.7168">
              <path d={svgPaths.p6e2500} id="Vector" stroke="var(--stroke-0, #727272)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_15.91%_15.91%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-17.37%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2338 5.23373">
              <path d={svgPaths.p1c56b200} id="Vector" stroke="var(--stroke-0, #727272)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34919" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#727272] text-[12.592px] whitespace-nowrap">Notes</p>
    </div>
  );
}

function NavigationSidebarMenu6() {
  return (
    <div className="content-stretch flex h-[32.381px] items-center justify-between p-[7.196px] relative rounded-[3.598px] shrink-0 w-[194.283px]" data-name="Navigation / Sidebar / Menu">
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[14.538px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀈄
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[12.592px]">Downloads</p>
    </div>
  );
}

function NavigationSidebarMenu7() {
  return (
    <div className="h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] relative shrink-0 text-[10.223px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀝊
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[12.592px]">Classes</p>
    </div>
  );
}

function NavigationSidebarMenu8() {
  return (
    <div className="h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] text-[12.592px] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀫓
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0">Courses</p>
    </div>
  );
}

function NavigationSidebarMenu9() {
  return (
    <div className="h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center leading-[1.5] min-h-px min-w-px relative text-[#727272] text-[12.592px] whitespace-nowrap" data-name="Content">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀣋
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0">Settings</p>
    </div>
  );
}

function NavigationSidebarMenu10() {
  return (
    <div className="h-[32.381px] relative rounded-[3.598px] shrink-0 w-full" data-name="Navigation / Sidebar / Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.196px] relative size-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu">
      <div className="content-stretch flex flex-col gap-[3.598px] items-start px-[14.391px] relative w-full">
        <NavigationSidebarMenu />
        <NavigationSidebarMenu1 />
        <NavigationSidebarMenu2 />
        <NavigationSidebarMenu3 />
        <NavigationSidebarMenu4 />
        <NavigationSidebarMenu5 />
        <NavigationSidebarMenu6 />
        <NavigationSidebarMenu7 />
        <NavigationSidebarMenu8 />
        <NavigationSidebarMenu9 />
        <NavigationSidebarMenu10 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[82.75px] w-[223.066px]" data-name="Container">
      <Menu />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute h-[480px] left-[-0.42px] top-0 w-[223px]" data-name="Content">
      <Logo />
      <Container1 />
    </div>
  );
}

function NavigationSidebar() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[1019px] left-0 top-0 w-[223px]" data-name="Navigation / Sidebar">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-r-[0.899px] border-solid inset-[0_-0.45px_0_0] pointer-events-none" />
      <Content1 />
    </div>
  );
}

export default function LmsSchedule() {
  return (
    <div className="bg-white relative size-full" data-name="LMS-schedule">
      <Frame10 />
      <HeaderTopHeader />
      <NavigationSidebar />
    </div>
  );
}