export default function AppHeader() {
  return (
    <header className="flex min-h-11 items-center justify-between gap-4">
      <div className="flex items-center gap-2.5 text-[#292621]">
        <span aria-label="W độ" className="text-[30px] font-extralight leading-none tracking-tight">
          W°
        </span>
        <span className="border-l border-[#dcd5cc] pl-2.5 text-[8px] leading-3 tracking-[0.25em] text-[#786f65]">
          ATELIER<br />BEVERAGE
        </span>
      </div>
      <span className="inline-flex min-h-11 items-center text-xs text-[#655d54]">Thành viên W°</span>
    </header>
  );
}
