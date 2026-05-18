
const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
    deadline: "deadline",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const setDeadlineById = (todos, todoId, deadline) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId);
    
    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.deadline] = deadline;
    return todo;
};

// добавляем

const createTodo = (todos, text, deadline = null) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_completed]: false,
        [todoKeys.deadline]: deadline,
    };
    todos.push(newTodo);
    return newTodo;
};

// выполняем

const completeTodoById = (todos, todoId) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId);

    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

// удаляем

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};
