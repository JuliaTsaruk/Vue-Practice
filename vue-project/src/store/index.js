import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    radioButtons: [
      { id: uuidv4(), buttonTitle: "Все", isPicked: true },
      { id: uuidv4(), buttonTitle: "Выполненные", isPicked: false },
      { id: uuidv4(), buttonTitle: "Невыполненные", isPicked: false },
    ],
    buttonTitle: "Все",
  },

  getters: {
    allTasks(state) {
      return state.todos;
    },

    radioBtns(state) {
      console.log(state.radioButtons);
      return state.radioButtons;
    },

    showTasks(state) {
      switch (state.buttonTitle) {
        case "Невыполненные":
          return state.todos.filter((todo) => !todo.isChecked);
        case "Выполненные":
          return state.todos.filter((todo) => todo.isChecked);
        default:
          return state.todos;
      }
    },

    showResult(state) {
      let isCheckedElLength = state.todos.filter(
        (todo) => todo.isChecked === true
      ).length;
      if (state.todos.length === 0) {
        return 0 + "%";
      }
      return Math.round((isCheckedElLength / state.todos.length) * 100) + "%";
    },
  },

  mutations: {
    addTask(state, newTask) {
      if (newTask) {
        let task = { title: newTask, id: uuidv4(), isChecked: false };
        state.todos.unshift(task);
      }
    },

    clearAll(state) {
      state.todos = [];
    },

    doneAll(state) {
      state.todos.filter((todo) => {
        if (todo.isChecked == false) {
          todo.isChecked = true;
        }
      });
    },

    deleteTask(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    changeTaskStatus(state, id) {
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
    },

    changeFilter(state, id) {
      state.radioButtons.map((btn) =>
        btn.id === id ? (state.buttonTitle = btn.buttonTitle) : btn
      );
    },

    changeFilterStatus(state, id) {
      state.radioButtons = state.radioButtons.map((btn) =>
        btn.id === id ? { ...btn, isPicked: btn.isPicked } : btn
      );
    },
  },
});
