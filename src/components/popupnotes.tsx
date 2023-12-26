
function Popup() {
    return (
        <div className="w-[1024px] text-[13px] border shadow-2xl bg-blue-950 flex flex-col px-10 py-5 rounded-[50px] border-solid border-neutral-400 items-start max-md:px-5">
            <header className="flex items-center gap-1.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4c295d2a145eb1cf0d6a2e94009200c030e637090635aaa44e459223ba7e67?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                    className="aspect-[1.5] object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                    alt=""
                />
                <h1 className="text-white text-3xl font-semibold self-stretch grow whitespace-nowrap">
                    Biology
                </h1>
            </header>
            <form className="items-stretch border shadow-2xl bg-blue-900 self-stretch flex flex-col mt-5 p-8 rounded-3xl border-solid border-neutral-400 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
                    <h2 className="text-white text-xl font-semibold">Cell structure</h2>
                    <div className="self-center flex items-stretch gap-3 my-auto">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca2121a9a8e83e5ef0530ffbcbdc4cf1bbc7d162dbed76da93468efaa25f43e?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[2.29] object-contain object-center w-[55px] justify-end items-center overflow-hidden shrink-0 max-w-full"
                            alt=""
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f386faa2487a98e60d429663d7581783607932bd5a45067aec5cf6c750c8ee62?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[0.78] object-contain object-center w-3.5 fill-red-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            alt=""
                        />
                    </div>
                </div>
                <hr className="shrink-0 h-px mt-1.5 max-md:max-w-full" />
                <p className="text-white text-lg mt-2.5 max-md:max-w-full">
                    Every cell is enclosed within a cell membrane that separates its cytoplasm from the
                    extracellular space. A cell membrane consists of a lipid bilayer, including cholesterols
                    that sit between phospholipids to maintain their fluidity at various temperatures. Cell
                    membranes are semipermeable, allowing small molecules such as oxygen, carbon dioxide, and
                    water to pass through while restricting the movement of larger molecules and charged
                    particles such as ions. Cell membranes also contains membrane proteins, including integral
                    membrane proteins that go across the membrane serving as membrane transporters, and
                    peripheral proteins that loosely attach to the outer side of the cell membrane, acting as
                    enzymes shaping the cell. Cell membranes are involved in various cellular processes such
                    as cell adhesion, storing electrical energy, and cell signalling and serve as the
                    attachment surface for several extracellular structures such as a cell wall, glycocalyx,
                    and cytoskeleton.
                </p>
            </form>
        </div>
    );
}
export default Popup;