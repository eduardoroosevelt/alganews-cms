import DefaultLayout from "../layouts/Default"
import usePageTitle from "../../core/hooks/usePageTitle"
import EditorsLists from "../features/EditorList"

export default function EditorListView() {
  usePageTitle("Lista de editores")
  return <DefaultLayout>
    <EditorsLists />
  </DefaultLayout>
}