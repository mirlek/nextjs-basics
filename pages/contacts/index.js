import Link from "next/link";
import contacts from "../api/contacts";
import RootLayout from "@/components/layout";

export default function ContactList() {
  return(
    <RootLayout>
    {contacts.map(contact => {
      return(
        <li><Link href={`contacts/${contact.id}`}> {contact.name}</Link></li>
      )
    })}
    </RootLayout>
  )
}