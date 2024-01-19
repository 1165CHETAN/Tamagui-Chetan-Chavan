import { UserDetailScreen } from 'app/features/user/detail-screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <UserDetailScreen />
    </>
  )
}
