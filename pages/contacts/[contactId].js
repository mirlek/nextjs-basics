import { useRouter } from 'next/router'
import contacts from '../api/contacts'
import RootLayout from '@/components/layout.js'

export default function Contact() {
 const router = useRouter()
 const {contactId } = router.query
 const contact = contacts.find(contact => contact.id === contactId)
 const [first, last] = contact?.name.split(" ")

 return(
  <RootLayout>
  <button type="button" onClick={() => router.back('/')}>
      Back
  </button>
  <h2>Contact: {last.toUpperCase()} {first}</h2>
  </RootLayout>
 )
}