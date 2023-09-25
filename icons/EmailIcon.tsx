import { CommonProps } from "@/types/IconsTypes";

const EmailIcon = ({ width, height }: CommonProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "25"} height={height || "24"} viewBox="0 0 25 24" fill="none">
            <path d="M17.2252 20.1619H7.26516C4.27716 20.1619 2.28516 18.6866 2.28516 15.2444V8.35987C2.28516 4.91763 4.27716 3.44238 7.26516 3.44238H17.2252C20.2132 3.44238 22.2052 4.91763 22.2052 8.35987V15.2444C22.2052 18.6866 20.2132 20.1619 17.2252 20.1619Z" stroke="#797979" strokeWidth="1.49438" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.2256 8.85156L14.1081 11.3103C13.0823 12.1168 11.399 12.1168 10.3731 11.3103L7.26562 8.85156" stroke="#797979" strokeWidth="1.49438" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default EmailIcon;