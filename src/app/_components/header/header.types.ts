import { NavItem } from "@/types/navItem.types";

export type DesktopNavigationProps = {
    isScrolled: boolean;
    activeSection: string;
    navLinks: NavItem[];
}

export type MobileNavigationProps = {
    activeSection: string;
    navLinks: NavItem[];
    showCTA: boolean;
}

export type NavLinkProps = {
    href: string;
    label: string;
    icon?: React.ReactNode;
    isActive: boolean;
    isMobile?: boolean;
}