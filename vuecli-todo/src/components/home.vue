<template>
  <div>
        <h1>To Do List</h1>
            <div class="todoAPP">
                <div v-if="!isEditing"> 
                        <input type="text" v-model="newTodo" 
                                @keyup.enter="storeTodo"
                                placeholder="What need to be done?">
                        <input type="submit" value="+" @click="storeTodo">
                </div>

                <div v-else> 
                        <input type="text" v-model="newTodo" 
                        @keyup.enter="updateTodo">
                        <input type="submit" value="↻" 
                        @click="updateTodo">
                </div>
                
                <ol>
                    <li v-for="(todo,index) in todos" :key="todo.name" :class="{ completed : todo.completed }">
                        <input type="checkbox" v-model="todo.completed" class="checkbox">
                                {{ todo.name }}  
                    <div> 
                        <button v-on:click="editTodo(index,todo)">
                            <i class="far fa-edit"></i>
                        </button>     
                        <button v-on:click="deleteTodo(index)">
                            <i class="far fa-trash-alt"></i>
                        </button> 
                    </div>
                    </li>
                </ol>
                <div class="clearButton"> 
                    <button v-on:click="clearCompleted"> Clear Completed </button>
                    <button v-on:click="clearAll"> Clear All Tasks</button>
                </div>

                <div class="pending"> 
                        Pending Tasks: {{ remaining }}
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"home",
    data: () => {
        return {
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
        }
    },
    computed: {
            remaining() {
                return this.todos.filter(this.inProgress).length;
            }
        },
    methods: {
        storeTodo() {
            let value = this.newTodo && this.newTodo.trim();
            if(!value) {
                alert('oops, some issue just occurred!!!')
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
                this.todos[this.selectedIndex]={
                    name: this.newTodo,
                    completed:false,
                }
            this.isEditing = false
            this.newTodo=''
        },

        deleteTodo(index) {
            this.todos.splice(index,1)
            this.newTodo=''
        },
        checkBox() {
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
}
</script>

<style>
.completed {
    text-decoration: line-through;
    color:grey;
}
h1 {
    text-align: center;
    color:rgb(143, 142, 142);
    font-family: 'Hachi Maru Pop', cursive;
    font-size:2.5rem;
}
.todoAPP {
    width:30%;
    border:1px;
    display:flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    margin: 0 auto;
    padding:10px;
    border-radius:7px;
    box-shadow: 5px 5px 15px #2f3238;
}
.todoAPP input[type="text"] {
    width:78%;
    padding:8px;
    font-size:17px;
    border:1px;
    background:#f4f3f4;
    border-radius:7px;
    margin-left:-10px;
    outline: none;
}
.todoAPP input[type="submit"] {
    width:15%;
    padding:9.5px;
    margin-left:4px;
    background:#47749e;
    color:#fff;
    font-size:15.5px;
    border-radius:7px;
    border:1px;
    cursor: pointer;
}
.todoAPP ol {
    list-style: none;
    width:90%;
    margin-left: -40px;
}
.todoAPP ol li {
    display:flex;
    justify-content: space-between;
    margin-bottom: 7px;
}
.todoAPP ol li input[type="checkbox"] {
    width:20px;
    height:20px; 
    border-radius:20px;
    color: lightgrey;
    cursor: pointer;
}
.todoAPP ol li button {
    border: 1px;
    padding:7px;
    margin: 2px;
    color: #fff;
    background: #47749e;
    border-radius:7px;
    font-size:12px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}
.todoAPP .clearButton {
    width:97%;
    display:flex;
    justify-content: space-evenly;
}
.todoAPP .clearButton button {
    width:45%;
    border: 1px;
    padding:10px;
    color: #fff;
    background: #47749e;
    border-radius:7px;
    cursor: pointer;
}
.todoAPP .pending {
    width:90%;
    text-align: left;
    padding:7px;
}
</style>