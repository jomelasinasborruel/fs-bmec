import { Box, Modal } from "@mui/material";
import ax from "./Component.module.scss";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useForm, FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RxCross1 } from "react-icons/rx";

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
  onEmailSend,
}: {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onEmailSend: (e: "sent" | "error") => void;
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

  const handleClose = () => {
    onClose(false);
    reset();
  };

  // useEffect(() => {docu}, []);

  const onSubmit = () =>
    //   e: {
    //   name?: string | undefined;
    //   message?: string | undefined;
    //   email: string;
    // }
    {
      onEmailSend("error");
      handleClose();
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
      id="modal-wrapper"
      className="pb-10 pt-20 px-4 justify-center flex overflow-auto"
      open={open}
      onClose={handleClose}
      disableAutoFocus
    >
      <Fade in={open}>
        <Box className={ax["contact-form_wrapper"]}>
          <button onClick={handleClose} className={ax["btn-close"]}>
            {<RxCross1 />}
          </button>
          <div className={ax["contact-form_header"]}>
            <img
              src="https://res.cloudinary.com/jmcloudname/image/upload/v1723273405/fs-bmec/f9couafms1jlqa5xbbat.jpg"
              alt="modal-image"
            />
            <div className={ax["overlay"]} />
            <p>
              forti<span className="text-white">serv</span>
            </p>
          </div>
          <div className="py-12 px-10">
            <p className="mb-4 text-4xl font-caviarDreams font-bold text-[#1b1b1b]">
              How can we be of <span className="text-primary">service?</span>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={ax["input-group"]}>
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
              <div className="mt-6">
                <InputTextArea
                  label={"Message"}
                  value={watch("message")}
                  error={errors.message}
                  {...register("message")}
                />
              </div>
              <input
                type="submit"
                value={"SEND"}
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
            "px-1 bg-white absolute left-[10px] top-[9px] transition-all duration-300 text-xl pointer-events-none rounded-md",
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
        <p className="text-red-800 text-xs mt-1 font-medium">
          {error?.message}
        </p>
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
          "px-1 bg-white absolute left-[10px] top-[9px] transition-all duration-300 text-xl pointer-events-none rounded-md",
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
      <p className="text-red-800 text-xs font-medium mt-[-0.125rem]">
        {error?.message}
      </p>
    </div>
  );
});

export default ModalContactForm;
