export interface NavProps {
  href: string;
  labelAr: string;
  LabelEn: string;
}

export const navbarLinksList: NavProps[] = [
  {
    href: "/",
    LabelEn: "Home",
    labelAr: "الرئيسية",
  },
  {
    href: "/#testimonials",
    LabelEn: "Testimonials",
    labelAr: "المشاريع",
  },
  {
    href: "/#pricing",
    LabelEn: "Pricing",
    labelAr: "الأخبار",
  },
  {
    href: "/about",
    LabelEn: "About",
    labelAr: "نبذة عنا",
  },
];
