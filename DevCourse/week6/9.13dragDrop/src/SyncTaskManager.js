import { request } from "./api.js"

export default function SyncTasksManager() {
  const tasks = []

  this.addTask = (task) => {
    tasks.push(task)
    console.log(task);
  }

  this.run = async () => {
    if (tasks.length > 0 ) {
      const task = tasks.shift()

      await request(task.url, {
        method: task.method || 'GET'
      })
    }
  }
}