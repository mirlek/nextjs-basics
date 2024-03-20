import { useRouter } from "next/router"
import topics from "../api/topics"
import RootLayout from "@/components/layout"

export default function Name() {
  const router = useRouter()
  const { name } = router.query
  const topic  = topics.find(topic => topics.id === name)
  return (
    <RootLayout>
    <h1>Visiting {topic.id} is highly recommended</h1>
    </RootLayout>
  )
}