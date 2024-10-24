import React from 'react'

function ToDoWeb() {
    let [todoData, setTodoData] = useState([]);
    let [title, setTitle] = useState("");
    let [editTitleId, setEditTitleId] = useState(null);
    const fetchdata = async () => {
        await axios
            .get("http://localhost:8080/api/todos")
            .then((res) => {
                setTodoData(res.data);
            })
            .catch((err) => {
                console.log("Error for fetching of data", err);
            });
    };

    const handleSubmit = async () => {
        if (editTitleId) {
            const updatedData = { title };
            await axios
                .put(`http://localhost:8080/api/todos/${editTitleId}`, updatedData)
                .then((res) => {
                    alert("Data Updated...");
                });
        } else {
            const mydata = { title };
            await axios
                .post("http://localhost:8080/api/todos", mydata)
                .then((res) => {
                    alert("Data added Successfully");
                });
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/todos/${id}`).then(() => {
            alert("Data deleted successfully");
        });
    };

    const enableEditingMode = (item) => {
        setTitle(item.title);
        setEditTitleId(item._id);
    };

    useEffect(() => {
        fetchdata();
    }, [handleDelete, handleSubmit]);
    return (
        <>
            <div className="container">
                <div>
                    <h2>To-do List App</h2>
                    <div>
                        <form>
                            <input
                                type="textarea"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter Your Mission"
                                required
                            />
                            <button onClick={handleSubmit}>
                                {editTitleId ? "Update" : "Add"}
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <ul>
                        {todoData.map((v, i) => {
                            return (
                                <>
                                    <div style={{ display: "flex" }}>
                                        <li key={i}>
                                            <div className="content">
                                                {i + 1}.<p>{v.title}</p>
                                            </div>
                                            <div className="list-buttons">
                                                <button onClick={() => enableEditingMode(v)}>
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(v._id)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </li>
                                    </div>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ToDoWeb