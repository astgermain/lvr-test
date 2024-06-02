import { useRouter } from 'next/router'

export default function HomeDetails() {
  const router = useRouter()
  return <p>Listing for: {router.query.slug}</p>
}