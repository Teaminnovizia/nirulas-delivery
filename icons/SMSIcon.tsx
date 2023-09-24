import { CommonProps } from "@/types/IconsTypes";

const SMSIcon = ({ width, height }: CommonProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "142"} height={height || "141"} viewBox="0 0 142 141" fill="none">
            <path d="M100.465 119.691H41.5353C23.8563 119.691 12.0703 110.966 12.0703 90.6073V49.8897C12.0703 29.5309 23.8563 20.8057 41.5353 20.8057H100.465C118.144 20.8057 129.93 29.5309 129.93 49.8897V90.6073C129.93 110.966 118.144 119.691 100.465 119.691Z" stroke="#797979" strokeWidth="1.49438" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M100.465 52.7988L82.02 67.3408C75.9502 72.1106 65.9911 72.1106 59.9213 67.3408L41.5352 52.7988" stroke="#797979" strokeWidth="1.49438" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="120.874" cy="30.5463" r="20.9213" fill="#ED2024" />
        </svg>
    )
}

export default SMSIcon;