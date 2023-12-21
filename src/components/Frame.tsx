import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="relative rounded-xl bg-darkslateblue-200 box-border overflow-hidden flex flex-row items-center justify-center py-[15px] px-3 max-w-full max-h-full text-left text-3xs text-white font-poppins border-[1px] border-solid border-dark-stroke">
      <div className="relative inline-block w-44 shrink-0">
        Note some important points to revise them anytime, anywhere. Just go to
        previous sessions in your profile to go through all the important
        topics.
      </div>
    </div>
  );
};

export default Frame;
