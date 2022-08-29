import { useState } from "react"

function SearchBar(props) {
    return (
        <form>
            <input type="text" placeholder="Search..."
                value={props.filterText} onChange={e => props.onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={props.inStockOnly}
                    onChange={e => props.oninStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

function ProductCategoryRow(props) {
    return (
        <tr>
            <th colSpan="2">{props.category}</th>
        </tr>
    )
}

function ProductRow(props) {
    return (
        <tr>
            <td>
                {
                    props.product.stocked
                        ? props.product.name
                        : <span style={{ color: "red" }}>
                            {props.product.name}
                        </span>
                }
            </td>
            <td>{props.product.price}</td>
        </tr>
    )
}

function ProductTable(props) {
    const rows = []
    let lastCategory = ""

    props.product.forEach(element => {
        let name = element.name.toLowerCase(),
            filterText = props.filterText.toLowerCase()
        if (name.indexOf(filterText) === -1) return
        if(props.inStockOnly && !element.stocked) return
        if (lastCategory !== element.category)
            rows.push(
                <ProductCategoryRow category={element.category} key={element.category}></ProductCategoryRow>
            )
        
        rows.push(
            <ProductRow product={element} key={element.name}></ProductRow>
        )
        lastCategory = element.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function FilterableProductTable(props) {
    const [filterText, setFilterText] = useState(""),
        [inStockOnly, setinStockOnly] = useState(0)

    return (
        <>
            <SearchBar
                filterText={filterText} onFilterTextChange={setFilterText}
                inStockOnly={inStockOnly} oninStockOnlyChange={setinStockOnly}></SearchBar>
            <ProductTable product={props.product} filterText={filterText} inStockOnly={inStockOnly}></ProductTable>
        </>
    )
}

export default function SearchProduct() {
    const PRODUCTS = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

    return (
        <>
            <FilterableProductTable product={PRODUCTS}></FilterableProductTable>
        </>
    )
}