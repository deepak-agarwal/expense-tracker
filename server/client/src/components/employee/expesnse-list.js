import React from "react"
import MaterialTable from "material-table"

export default function ExpenseList() {
	const [state, setState] = React.useState({
		columns: [
			{ title: "Expense Name", field: "expenseName" },
			{ title: "Amount", field: "amount", type: "numeric" },
			{ title: "Note", field: "note" },
			{
				title: "Birth Place",
				field: "birthCity",
				lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
			}
		],
		data: [
			{ expenseName : "X", amount: "40", note: 1987, birthCity: 63 },
			{
				expenseName: "Zerya Betül",
				amount: "Baran",
				note: 2017,
				birthCity: 34
			}
		]
	})

	return (
		<MaterialTable
			title='Expense List'
			columns={state.columns}
			data={state.data}
			editable={{
				onRowAdd: newData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve()
							const data = [...state.data]
							data.push(newData)
							setState({ ...state, data })
						}, 600)
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve()
							const data = [...state.data]
							data[data.indexOf(oldData)] = newData
							setState({ ...state, data })
						}, 600)
					}),
				onRowDelete: oldData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve()
							const data = [...state.data]
							data.splice(data.indexOf(oldData), 1)
							setState({ ...state, data })
						}, 600)
					})
			}}
		/>
	)
}
