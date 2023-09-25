import { FormEvent } from "react";

export type LoginSubmitType = (e: FormEvent<HTMLFormElement>, currentStep: number, setClose?: Function) => void;

export interface SignUpVals {
    phone: string
    full_name: string
    email: string
}