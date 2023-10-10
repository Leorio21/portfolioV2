"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import style from "./ContactForm.module.css";
import { useNotify } from "@/app/Hooks/Notify/useNotify";
import Button from "../Button/Button";
import { IFormValues } from "@/app/Interfaces/Interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape(
  {
    firstName: yup
      .string()
      .required("Veuillez saisir votre prénom")
      .matches(/^[a-zÀ-ÖØ-öø-ÿ -]+$/i, "Présence de caractères non authorisés"),
    lastName: yup
      .string()
      .required("Veuillez saisir votre nom")
      .matches(/^[a-z -]+$/i, "Présence de caractères non authorisés"),
    phone: yup.string().when("email", {
      is: (value: string) => value === "",
      then: () =>
        yup
          .string()
          .required("Veuillez saisir votre numéro de téléphone ou email")
          .matches(
            /^(0|\+33)[1-79][0-9]{8}$/,
            "Veuillez saisir un numéro de téléphone valide",
          ),
      otherwise: () =>
        yup
          .string()
          .matches(/^(0|\+33)[1-79][0-9]{8}$/, {
            message: "Veuillez saisir un numéro de téléphone valide",
            excludeEmptyString: true,
          })
          .optional(),
    }),
    email: yup.string().when("phone", {
      is: (value: string) => value === "",
      then: () =>
        yup
          .string()
          .required("Veuillez saisir votre email ou numéro de téléphone")
          .matches(
            /^([a-z0-9-_\.]+)@([a-z0-9-]+)\.([a-z-]{2,})$/i,
            "Veuillez saisir un email valide",
          ),
      otherwise: () =>
        yup
          .string()
          .matches(/^([a-z0-9-_\.]+)@([a-z0-9-]+)\.([a-z-]{2,})$/i, {
            message: "Veuillez saisir un email valide",
            excludeEmptyString: true,
          })
          .optional(),
    }),
    subject: yup.string().required("Veuillez saisir un sujet"),
    message: yup.string().required("Veuillez saisir votre message"),
  },
  [["email", "phone"]],
);

export default function ContactForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver<any>(schema),
  });

  const { setNotify, NotifyContainer } = useNotify();
  const [color, setColor] = useState<"success" | "error" | "warning">(
    "success",
  );

  const onFormSubmit = async (data: IFormValues): Promise<void> => {
    setColor("warning");
    setNotify("Envoi en cours ...");

    const result = await emailjs.send(
      "service_9yero79",
      "template_5pof98o",
      { ...data },
      "dZzLfvEUE6pkRSeo_",
    );

    if (result.status === 200) {
      reset();
      setColor("success");
      setNotify("Votre message à bien été envoyé");
    } else {
      setColor("error");
      setNotify("Une erreur est survenue, merci de ré-essayer plus tard");
    }
  };

  return (
    <>
      <form className={style.formContainer}>
        <Input
          inId="lastName"
          inType="text"
          inLabel="Nom"
          inGridPosition="lastName"
          inError={errors.lastName?.message}
          inRequired={true}
          inRegister={register}
          inWatch={watch}
        />
        <Input
          inId="firstName"
          inType="text"
          inLabel={"Prénom"}
          inGridPosition={"firstName"}
          inError={errors.firstName?.message}
          inRequired={true}
          inRegister={register}
          inWatch={watch}
        />
        <Input
          inId="email"
          inType="email"
          inLabel={"Em@il"}
          inGridPosition={"email"}
          inError={errors.email?.message}
          inRequired={true}
          inRegister={register}
          inWatch={watch}
        />
        <Input
          inId="phone"
          inType="tel"
          inLabel={"Téléphone"}
          inGridPosition={"tel"}
          inError={errors.phone?.message}
          inRequired={true}
          inRegister={register}
          inWatch={watch}
        />
        <Input
          inId="subject"
          inType="text"
          inLabel={"Objet"}
          inGridPosition={"subject"}
          inError={errors.subject?.message}
          inRequired={true}
          inRegister={register}
          inWatch={watch}
        />
        <TextArea
          inId="message"
          inLabel={"Message"}
          inGridPosition={"message"}
          inError={errors.message?.message}
          inRequired={true}
          inRegister={register}
          inWatch={watch}
        />
        <div className={style.buttons}>
          <Button
            type="button"
            value="Réinitialiser"
            color="reset"
            onClick={() => {
              reset();
            }}
          />
          <Button
            type="button"
            value="Envoyer"
            color="send"
            onClick={handleSubmit(onFormSubmit)}
          />
        </div>
      </form>
      <NotifyContainer color={color}></NotifyContainer>
    </>
  );
}
