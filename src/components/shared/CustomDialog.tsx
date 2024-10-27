import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface CustomDialogProps {
  button: ReactNode;
  dialogElement: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CustomDialog: FC<CustomDialogProps> = ({
  button,
  setIsOpen,
  dialogElement,
  isOpen,
}) => {
  return (
    // <div className="fixed z-10 top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-[#05053040]">
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger className="font-base h-full">{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[70rem] bg-white">
        {dialogElement}
      </DialogContent>
    </Dialog>
    // </div>
  );
};
export default CustomDialog;
