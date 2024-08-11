import { Box, Modal } from "@mui/material";
import ax from "./Component.module.scss";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";
import clsx from "clsx";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.email
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const ModalContactForm = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { register } = useForm<FormValues>({ resolver });

  return (
    <Modal open={open} onClose={() => onClose(false)}>
      <Fade in={open}>
        <Box className={ax["contact-form_wrapper"]}>
          <div className="h-[18.75rem] w-full relative flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/jmcloudname/image/upload/v1723273405/fs-bmec/f9couafms1jlqa5xbbat.jpg"
              alt="modal-image"
              className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000b9]" />
            <p className="font-terminatorTwo relative text-primary text-3xl">
              forti<span className="text-white">serve</span>
            </p>
          </div>
          <div className="py-10 px-8">
            <p className="mb-4 text-4xl font-lato font-bold text-[#1b1b1b]">
              How can we be of <span className="text-primary">service?</span>
            </p>
            <form>
              <div className="grid grid-flow-col gap-4">
                <InputText label={"Name"} {...register("name")} />
                <InputText label={"Email"} {...register("email")} />
              </div>
            </form>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

interface InputTextProps {
  label: String;
}

const InputText = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputTextProps
>((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={clsx(ax["inputText_wrapper"], {
        "border-[#00a74eaf]": isFocus,
      })}
    >
      <label
        className={clsx(
          "px-1 bg-white absolute left-[10px] top-[9px] transition-all duration-300 text-xl pointer-events-none",
          {
            "!-top-[0.8125rem] !left-4 text-sm text-[#00a74eaf]": isFocus,
          }
        )}
      >
        {props.label}
      </label>
      <input
        ref={ref}
        {...props}
        type="text"
        className="bg-transparent text-[#141414] size-full py-2 px-4 focus:ring-0 text-xl"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
});

export default ModalContactForm;
