import { FormEvent } from "react";

export type onSubmitType = (e: FormEvent<HTMLFormElement>, currentStep: number, setClose?: Function) => void;