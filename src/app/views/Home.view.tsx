import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useMemo } from "react"
import { Column, useTable } from "react-table"
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"
import PostsList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"




export default function Home() {
  usePageTitle('Home')


  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px' }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostsList />
  </DefaultLayout>
}