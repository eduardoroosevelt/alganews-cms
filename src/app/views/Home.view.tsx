import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useMemo } from "react"
import { Column, useTable } from "react-table"
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../../layouts/Default"
import PostsList from "../features/PostsList"
import UserMetrics from "../features/UserMetrics"




export default function Home() {
  usePageTitle('Home')


  return <DefaultLayout>
    <UserMetrics />
    <PostsList />
  </DefaultLayout>
}