import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    const [todo, setTodo] = useState('')
    const [todosArr, setTodosArr] = useState([])

    const getItems = async () => {
        let response = await fetch("http://localhost:9000/getItems")
        
        // returns an object with ReadableStream as body
        console.log(response)
        console.log(`res: ${response}`)
        // outputs as {}
        console.log(`res: ${JSON.stringify(response)}`)

        // https://stackoverflow.com/a/40403285
        let test = await response.json()

        // displays an array
        console.log(test)
        console.log(`test: ${test}`)

        // displays an array
        console.log(`test: ${JSON.stringify(test)}`)

        setTodosArr(test)
        
    }

    useEffect(() => {
        // axios.get("http://localhost:9000/getItems").then(res => {
        //     console.log(`item: ${JSON.stringify(res.data)}`)
        //     setTodosArr(res.data)
        // })
        getItems()
    }, [])

    const onChangeTodo = (event) => {
        setTodo(event.target.value)
    }

    const onSubmit = async () => {

        const rawResponse = await fetch('http://localhost:9000/addItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({todo: todo}),
        })

        const content = await rawResponse.json();

        console.log(`content: ${content}`)

        setTodosArr(content)
        setTodo("")



        // axios.post("http://localhost:9000/addItem", {todo: todo}).then((res) => {

        //     console.log(`response: ${JSON.stringify(res.data)}`)

        //     let data = res.data
        //     setTodosArr(data)
        //     setTodo("")
        // })
    }

    const onRemove = async (id) => {
        console.log(`id: ${id}`)

        const rawResponse = await fetch('http://localhost:9000/removeItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({itemId: id}),
        })

        const content = await rawResponse.json();
        console.log(`content: ${JSON.stringify(content)}`)

        setTodosArr(content)


        // axios.post("http://localhost:9000/removeItem", {itemId: id}).then(res => {
        //     console.log(`res: ${JSON.stringify(res.data)}`)

        //     setTodosArr(res.data)
        // })

    }

    return(
        <div>
            <p>HOME</p>
            <p>todo</p>
            {/* <input type="text" value={todo} onChange={onChangeTodo} /> */}
            <input type="text" value={todo} onChange={onChangeTodo} />
            <button onClick={() => onSubmit()}>Add todo</button>

            <p>Todos</p>
            <ul>
                {
                    todosArr.map((todo, id) => {

                        return(
                            <div key={id}>
                                <li key={id}>{todo}</li>
                                <button onClick={() => onRemove(id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Home;