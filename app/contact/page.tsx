import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — 3 Patti Ludo Support",
  description:
    "Contact 3 Patti Ludo support via WhatsApp, Telegram, or email. Get help with deposits, withdrawals, login, bonuses, and game issues.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact 3 Patti Ludo Support",
    description: "Reach our team via WhatsApp, Telegram, or email for fast support in Urdu & English.",
    url: "https://teenpattiludo.com.pk/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
