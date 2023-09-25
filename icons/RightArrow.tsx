import { RightArrowProps } from "@/types/IconsTypes";

const RightArrow = ({ className, style, onClick, top, right, color, width, height }: RightArrowProps) => {
    return (
        <svg
            className={className}
            style={{ ...style, height: 40, top, filter: color === 'black' ? 'invert(1)' : 'invert(0)', right, zIndex: 5 }}
            onClick={() => onClick && onClick()}
            width={width || "24"}
            height={height || "48"}
            viewBox="0 0 24 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2.245 46.4396L20.7183 27.9662C22.9 25.7846 22.9 22.2146 20.7183 20.0329L2.245 1.55957" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default RightArrow;