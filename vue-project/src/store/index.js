import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "Buy bread", isChecked: true },
      { id: 2, title: "Buy milk", isChecked: true },
      { id: 3, title: "Buy apples", isChecked: false },
    ],
    radioButtons: [
      { id: 1, buttonTitle: "Все", isPicked: true},
      { id: 2, buttonTitle: "Выполненные",isPicked: false},
      { id: 3, buttonTitle: "Невыполненные",isPicked: false},
    ],
  },

  getters: {
    allTasks(state) {
      return state.todos;
    },

    radioBtns(state) {
      return state.radioButtons;
    },

    validTasks(state) {
      return state.todos.filter((el) => {
        return el.title;
      });
    },

    showTasks(state) {
      if (state.radioButtons.buttonTitle === "Выполненные") {
        return state.todos.filter((todo) => todo.isChecked);
      } else if (state.radioButtons.buttonTitle === "Невыполненные") {
        return state.todos.filter((todo) => !todo.isChecked);
      } else {
        return state.todos;
      }
    },

    showResult(state){console.log(state.todos)
        let r = state.todos.length;
        let q = state.todos.filter(x=> x.isChecked === true).length;
        
        if(r === 0){
            return 0
        }else{
            return Math.round(100-(q *100/r)) + "%";
        }
    }
  },

  mutations: {
    addTask(state, newTask) {
      state.todos.unshift(newTask);
    },

    clearAll(state) {
      state.todos = [];
      
      /*let message = document.createElement("div") ;
      message.className = "allDoneMessage";
      message.innerHTML = "ggggg";
      document.body.append(message);*/
    },

    doneAll(state) {
      console.log(state.todos);
      state.todos.filter((e) => {
        if (e.isChecked == false) {
          e.isChecked = true;
        }
      });
    },

    deleteTask(state, id) {
      state.todos.filter((el) => {
        if (el.id !== id) {
          return el.id;
        }
      });
    },
  },
});
