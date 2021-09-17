export default function TaskManager() {
  const tasks = [];

  this.addTasks = (task) => {
    tasks.push(task)
    console.log(tasks);
  }

  this.run = async () => {
    if (tasks.length > 0) {
      const task = tasks.shift()
      await task()
      this.run()
    }
  }

  this.hasTask = document.createElement('button')
}