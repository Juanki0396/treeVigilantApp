import { useEffect, useState } from "react";

interface Tree {
    name: string;
    latitude: number;
    longitude: number;
}

const trees: Tree[]= [
    {
        name: "Pino 1",
        latitude: 40.05111,
        longitude: -1.32321,
    },
    {
        name: "Pino 2",
        latitude: 40.05111,
        longitude: -1.32321,
    },
    {
        name: "Abeto 1",
        latitude: 40.05111,
        longitude: -1.32321,
    }
]

const TreeInvetoryPage = (): JSX.Element => {
    const [query, setQuery] = useState("")
    const [filterTrees, setFiltered] = useState<Tree[]>([])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setQuery(value)
        setFiltered(trees.filter(t => t.name.includes(value))) 
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setQuery(e.target.value)
        setFiltered([])
    }

    const SearchList = (): JSX.Element | null => {
        if(filterTrees.length === 0) return null;
        const liStyle = "px-2 py-2 block flex-1 hover:bg-gray-200 text-start"
        return (
            <ul className="divide-y-2 flex flex-col rounded-md text-green-800 bg-white">
                {filterTrees
                    .map(t => 
                    <button className={liStyle} onClick={onClick} value={t.name}>{t.name}</button>)}
            </ul>
        )
    }

    return (
        <div className="flex flex-col pt-40">
            <h1 className="flex-1 text-center text-3xl font-bold">Inventory</h1>
            <form className="flex-1 flex flex-col mx-72 py-3 px-5">
                <input type="text" placeholder="Name..." value={query} onChange={onChange} 
                className="rounded-lg bg-gray-200 px-5 py-2 text-gray-900"/>
                <SearchList />
            </form>
        </div>
    )
}

export default TreeInvetoryPage
