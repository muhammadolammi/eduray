export const menuItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Features" },
  { href: "/", label: "Testimonial" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Contact" },
];

export interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}
