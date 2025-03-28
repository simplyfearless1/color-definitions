import ItemsListTable from "./components/items-list-table"
import PageHeader from "./components/page-header"

const App = () => {
  const itemsTable = [
    {
      title: 'Main',
      hex: '#ffffff'
    },
    {
      title: 'Second',
      hex: '#000000'
    },
    {
      title: 'Tringo',
      hex: '#222222'
    },   
  ]

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <PageHeader />
        <ItemsListTable items={itemsTable} />
      </div>
    </>
  )
}

export default App
