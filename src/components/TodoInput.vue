<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="할일을 입력해주세요!!!" v-on:keyup.enter="addTodo">
    <!--button v-on:click="addTodo">추가</button-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      console.log(this.newTodoItem);
      if(this.newTodoItem !== ""){
        var value = this.newTodoItem && this.newTodoItem.trim();
        //localStorage.setItem(value, value);
        this.$emit('addTodo', value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #647bfb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
