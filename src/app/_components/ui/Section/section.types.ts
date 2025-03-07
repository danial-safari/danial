import { ReactNode } from "react";

export type SectionProps = {
    id?: string;
    className?: string;
    children: ReactNode;
    noPattern?: boolean;
}