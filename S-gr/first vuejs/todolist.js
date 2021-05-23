new Vue ({
    el : '#app',
    computed: {
            remaining() {
                return this.todos.filter(this.inProgress).length;
            }
        },
    data :{
        isEditing: false,
        sedlectedIndex: null,
        newTodo: '',
        idForNewTodo: 5,
        todos: [
            {
                'id':1,
                'name':'sleep',
                'completed': true,
            },

            {
                'id':2,
                'name':'eat',
                'completed': true,
            },
    
            {
                'id':3,
                'name':'reach challenger',
                'completed': false,
            },

            {
                'id':4,
                'name':'do exercise',
                'completed': false,
            },
        ],
    
    },

    methods: {
        storeTodo() {
            if(this.newTodo =='' || this.newTodo == ' ') {
                alert('input something, please!!')
            } else {
            this.todos.push({
                id: this.idForNewTodo,
                name: this.newTodo,
                completed: false,
            })
            this.newTodo=''
            this.idForNewTodo++
        }
        },

        editTodo(index,todo) {
            this.newTodo = todo.name
            this.selectedIndex = index
            this.isEditing = true
        },

        updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo, this.todo.completed = false)
            this.isEditing = false
            this.newTodo=''
        },

        deleteTodo(index) {
            this.todos.splice(index,1)
            this.newTodo=''
        },
        checkBox(todo) {
            this.completed = !this.completed
        },
        inProgress(todo) {
            return !this.isCompleted(todo)
        },
        isCompleted(todo) {
            return todo.completed
        },
        clearCompleted() {
            this.todos = this.todos.filter(this.inProgress)
        },
        clearAll() {
            this.todos=[]
        },
    }
})