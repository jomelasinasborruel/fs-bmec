import { Box, Modal } from "@mui/material";
import ax from "./Component.module.scss";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useForm, FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().min(2, "Please enter a valid name."),
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Please enter a valid email."),
    message: yup.string().min(2, "Please enter at least 50 characters."),
  })
  .required();

const ModalContactForm = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () =>
    //   e: {
    //   name?: string | undefined;
    //   message?: string | undefined;
    //   email: string;
    // }
    {
      // fetch("http://localhost:3000/mailer/send-sample", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(e),
      // })
      //   .then((e) => e.json())
      //   .then((e) => console.log(e));
    };

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose(false);
        reset();
      }}
    >
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid sm:grid-flow-col grid-flow-row sm:grid-cols-2 gap-4 mt-8">
                <InputText
                  label={"Name"}
                  value={watch("name")}
                  error={errors.name}
                  {...register("name")}
                />
                <InputText
                  label={"Email"}
                  value={watch("email")}
                  error={errors.email}
                  {...register("email")}
                />
              </div>
              <div className="mt-8">
                <InputTextArea
                  label={"Messages"}
                  value={watch("message")}
                  error={errors.message}
                  {...register("message")}
                />
              </div>
              <input
                type="submit"
                value={"Send"}
                className={ax["btn-submit"]}
              />
            </form>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

interface InputProps {
  label: String;
  value?: string;
  error?: FieldError;
}

const InputText = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputProps
>(({ label, value, error, ...props }, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputVal, setInputVal] = useState<string>();

  useEffect(() => {
    setInputVal(value);
  }, [value]);

  return (
    <>
      <div
        className={clsx(ax["inputText_wrapper"], {
          "border-[#00a74eaf]": isFocus || inputVal,
        })}
      >
        <label
          className={clsx(
            "px-1 bg-white absolute left-[10px] top-[9px] transition-all duration-300 text-xl pointer-events-none",
            {
              "!-top-[0.8125rem] !left-4 text-sm text-[#00a74eaf]":
                isFocus || inputVal,
            }
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          type="text"
          className="bg-transparent text-[#141414] size-full py-2 px-4 focus:ring-0 text-xl"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <span className="text-red-800 text-sm">{error?.message}</span>
      </div>
    </>
  );
});

const InputTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
    InputProps
>(({ label, value, error, ...props }, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputVal, setInputVal] = useState<string>();

  useEffect(() => {
    setInputVal(value);
  }, [value]);

  return (
    <div
      className={clsx(ax["inputTextArea_wrapper"], {
        "border-[#00a74eaf]": isFocus || inputVal,
      })}
    >
      <label
        className={clsx(
          "px-1 bg-white absolute left-[10px] top-[9px] transition-all duration-300 text-xl pointer-events-none",
          {
            "!-top-[0.8125rem] !left-4 text-sm text-[#00a74eaf]":
              isFocus || inputVal,
          }
        )}
      >
        {label}
      </label>
      <textarea
        ref={ref}
        {...props}
        className="bg-transparent text-[#141414] resize-none min-h-[100px] size-full py-4 px-4 focus:ring-0 text-xl"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <span className="text-red-800 text-sm">{error?.message}</span>
    </div>
  );
});

export default ModalContactForm;
