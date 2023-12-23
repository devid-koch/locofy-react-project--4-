
function TakeNoteComponent() {
  return (       //18px, 25px, 31px, 25px
       <>

    <div className="flex justify-ceter items-center m-auto mt-[50px]">
        <div className="[background:linear-gradient(270deg,_#010711,_#052554)] flex flex-col gap-1 text-white w-[322px] h-[275px] pt-[18px]
        pr-[25px] pb-[31px] pl-[25px] rounded-2xl border border-[#32B7F6]
        "> 
            <ul>  {/*Row 1*/}
                <li className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        {/* <img src="./src/assets/Vector.jpg" alt="" className="bg-red-500"/> */}
                        <i className="fa fa-angle-right text-xl font-bold" aria-hidden="true"></i>
                        <img src="./src/assets/Clip path group.png" alt=""/>
                        <p className=" font-poppins text-3xl font-bold">Take Notes</p>
                    </div>

                    <div> <img src="./src/assets/info.png" alt="" /></div>
                </li>
            </ul>

            <ul>  {/*Row 2*/}
                <li className="flex">
                    <div><p className="text-[#cccccc]">Current Task</p></div>
                </li>
            </ul>

            <ul>  {/*Row 3*/}
                <li className="flex">
                    <div className="flex">
                        <input className= "text-[#ffffff] placeholder-white bg-[#0B316EA6] border border-[#32B7F6] rounded-[20px] w-[272px] h-[50px] pl-[15px]" type="text" placeholder="New Note" />
                        <img src="./src/assets/Vector1.png" alt="" className="absolute right-[47%] top-[29.5%]" />
                    </div>
                </li>
            </ul>

            <ul>  {/*Row 4*/}
                <li className="flex">
                    <div><p className=" font-poppins font-base text-[#cccccc]" >Previous task notes</p></div>
                </li>
            </ul>

            <ul>  {/*Row 5*/}
                <li>
                    <div className="flex">
                        <input type="text" className="text-[#ffffff] placeholder-white bg-[#0B316EA6] border border-[#32B7F6] rounded-[20px] w-[272px] h-[50px] pl-[15px]" placeholder="Physics"/>
                        <img src="./src/assets/Arrow 4.png" alt="" className="absolute right-[47%] top-[44%]"/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default TakeNoteComponent