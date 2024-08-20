import { useForm } from "react-hook-form";
import {
  FormSchema,
  InputText,
  InputTextArea,
  schema,
} from "../Modal/ContactForm/ContactForm";
import ax from "./Component.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const socialMedia = [
  {
    icon: (
      <FaFacebook className="text-2xl hover:text-3xl transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    ),
    href: "",
  },
  {
    icon: (
      <IoMailSharp className="text-2xl hover:text-3xl transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    ),
    href: "",
  },
  {
    icon: (
      <FaPhone className="text-2xl hover:text-3xl transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    ),
    href: "",
  },
];

const ContactForm = ({
  onEmailSend,
}: {
  onEmailSend: (e: "sent" | "error") => void;
}) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    reset();
  };

  const onSubmit = async (e: FormSchema) => {
    fetch(`${import.meta.env.VITE_END_POINT}/mailer/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    })
      .then((e) => e.json())
      .then((e) => {
        onEmailSend(e.success === true ? "sent" : "error");
        handleClose();
      })
      .catch(() => {
        onEmailSend("error");
        handleClose();
      });
  };

  return (
    <div>
      <div className={ax["contact-form_wrapper"]}>
        <div id="contactForm" className="absolute -top-20 left-0" />
        <motion.div
          initial={{ y: 300 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className={ax["contact-form_container"]}
        >
          <div className={ax["contact-form_textContainer"]}>
            <p>
              Let's Get<span className="text-primary"> In Touch!</span>
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
              <button
                type="submit"
                className={clsx(ax["btn-submit"], {
                  "pointer-events-none bg-gray-500": isLoading,
                })}
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  "SEND"
                )}
              </button>
            </form>
          </div>
        </motion.div>
        <div className="max-w-[800px] w-[80vw] mt-10 h-[0.0625rem] bg-gradient-to-r from-[#c2c2c249] via-[#223128] to-[#c2c2c249] " />
        <div className="flex space-x-4 mt-6 mb-10 relative">
          {socialMedia.map((item) => (
            <a href={item.href} className="size-10 relative ">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center py-10 bg-[#252525]">
        <p className="font-terminatorTwo text-[#e2e2e2]">
          forti<span className="text-primary">serv</span>
        </p>
        <p className="font-lato text-[#e2e2e2]">© 2012 | Fortiserv Inc.</p>
      </div>
    </div>
  );
};

export default ContactForm;
