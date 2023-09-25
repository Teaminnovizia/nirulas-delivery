import { FormEvent } from "react";

export type LoginSubmitType = (e: FormEvent<HTMLFormElement>, currentStep: number, setClose?: Function) => void;