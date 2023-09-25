import { LeftArrowProps } from "@/types/IconsTypes";

const LeftArrow = ({ className, style, onClick, top, left, color, width, height }: LeftArrowProps) => {
    return (
        <svg
            className={className}
            style={{ ...style, height: 40, top, filter: color === 'black' ? 'invert(1)' : 'invert(0)', left, zIndex: 5 }}
            onClick={() => onClick && onClick()}
            width={width || "24"}
            height={height || "48"}
            viewBox="0 0 24 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M21.755 1.56043L3.28167 20.0338C1.1 22.2154 1.1 25.7854 3.28167 27.9671L21.755 46.4404" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default LeftArrow;