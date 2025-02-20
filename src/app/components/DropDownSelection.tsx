import Link from "next/link";

export type DropDownLink = {
    title: string,
    href: string
}

export const DropDownSelection = (prop: DropDownLink) => {
    const inTitle = prop.title
    const link = prop.href

    return (
        <li className="">
            <div> <Link href={link}>{inTitle}</Link></div>
        </li>
    )
} 