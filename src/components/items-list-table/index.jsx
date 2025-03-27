const ItemsListTable = ({ items }) => {

  return (
    <div className="max-w-7xl w-full mt-8 bg-white rounded-md p-8 shadow-lg">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="w-1/3">Color name</th>
            <th className="w-1/3">Color hex</th>
            <th className="w-1/3">Action</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 && items.map((item, index) => {
            return (
              <tr key={index} className="text-center">
                <td>
                  {item.title}
                </td>
                <td>
                  {item.hex}
                </td>
                <td>
                  <button>
                    <span className="text-4xl material-symbols-outlined">
                    edit_document
                    </span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">
                    delete
                    </span>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default ItemsListTable