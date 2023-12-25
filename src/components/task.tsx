
function TaskComponent() {
    return (
        <div className="border shadow-sm flex max-w-[322px] flex-col items-stretch pt-5 pb-8 px-6 rounded-3xl border-solid border-sky-400">
            <header className="flex w-full items-stretch justify-between gap-5">
                <div className="flex items-center justify-between gap-3.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/888a4cc1cb9b54648da24a6145d330daed8bda04f94806ea41033dfc552cdaf9?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-[0.56] object-contain object-center w-2.5 stroke-[2px] stroke-white overflow-hidden shrink-0 max-w-full my-auto"
                        aria-label="Logo Image"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31082543d5085ae083a91cc46ba4767b2937588402c15176449cd6080c24684?apiKey=91472dff4a9b43ce95ae25688f4c786f&" className="aspect-square object-contain object-center w-[30px] overflow-hidden self-stretch shrink-0 max-w-full"
                        aria-label="Another Image"
                    />
                </div>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b5604dc2dd0368eb7b7cd38392003fb61c3ea4684494fdc59836207c731432?apiKey=91472dff4a9b43ce95ae25688f4c786f&" className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    aria-label="Yet another Image"
                />
            </header>
            <div className="justify-between items-center border shadow-sm bg-sky-900 bg-opacity-70 flex gap-5 mt-4 px-5 py-4 rounded-3xl border-solid border-sky-400">
                <div className="text-white text-sm my-auto">Task name....</div>
                <a href="#" className="focus-within:outline-none">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6071471d8ac7447ac5359a4d92cc5070163ac18be0c69f52957ddfac4d60176a?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-5 fill-[linear-gradient(150deg,#48DBFD_19.75%,#3660F2_81.76%)] stroke-[1px] stroke-sky-400 stroke-opacity-30 shadow-sm overflow-hidden self-stretch shrink-0 max-w-full"
                        aria-label="Task Image"
                    />
                </a>
            </div>
            <div className="border shadow-sm bg-sky-900 bg-opacity-70 flex justify-between gap-5 mt-4 px-9 py-5 rounded-3xl border-solid border-sky-400 items-start">
                <div className="text-white text-center text-sm mt-2">
                    <span className="font-medium text-4xl">1</span>
                    <br />
                </div>
                <div className="bg-sky-400 bg-opacity-50 w-px shrink-0 h-[55px]" />
                <div className="text-white text-center text-sm mt-2">
                    <span className="font-medium text-4xl">0</span>
                    <br />
                </div>
            </div>
            <div className="border shadow-sm bg-sky-900 bg-opacity-70 flex justify-between gap-5 mt-4 px-5 py-4 rounded-3xl border-solid border-sky-400 items-start">
                <div className="text-white text-sm flex-1 mt-1">
                    <label htmlFor="chapterInput">Read chapter 1</label>
                    <input
                        type="text"
                        id="chapterInput"
                        className="w-full focus:outline-none focus:ring-0"
                        aria-label="Chapter Input"
                    />
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-4">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd89e3b1801de879eceb49237b6218f4afc34f5c63a75cd8b1ebe07364f363e?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-[0.89] object-contain object-center w-[17px] stroke-[1px] stroke-white overflow-hidden shrink-0 max-w-full"
                        aria-label="Some Image"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e50fcea5163820be070a27344a9264452b12d8650bcf5aa0b44c511b22ea2f2a?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        aria-label="Another Image"
                    />
                    <div className="stroke-[1.5px] flex w-[18px] shrink-0 h-[18px] flex-col rounded-[50%] self-start" />
                </div>
            </div>
        </div>
    );
}

export default TaskComponent;