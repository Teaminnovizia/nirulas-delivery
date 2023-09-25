import Link, { LinkProps, LinkRestProps } from "next/link";

const LinkButton = ({ title, className, ...restProps }: LinkProps<LinkRestProps>) => {
    return (
        <Link
            {...restProps}
            className={`flex items-center justify-center px-6 py-1.5 bg-primary-red text-white font-rubik font-medium text-base uppercase rounded-full ${className}`}>
            {title}
        </Link>
    )
}

export default LinkButton;