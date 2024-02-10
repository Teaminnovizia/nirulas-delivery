import { CommonProps } from "@/types/IconsTypes";

const GreenRectIcon = ({ width, height, isNonVeg = false }: { isNonVeg?: boolean } & CommonProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "18"} height={height || "18"} viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="16" height="16" rx="2" stroke={ isNonVeg ? "red" : "#009E2C" } strokeWidth="2" />
            <circle cx="9" cy="9" r="5" fill={ isNonVeg ? "red" : "#009E2C" } />
        </svg>
    )
}

export default GreenRectIcon;