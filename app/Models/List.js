import { generateId } from "../utils.js";
import Task from './Task.js'
export default class List {
    constructor(data) {

        this.title = data.title
        this.id = data.id || generateId()
            /** @type {Task[]} */
        this.tasks = []
            //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    }


    get Template() {
        return /*html*/ `
  <div class="col-3 m-auto border border-warning rounded shadow bg-white">
  <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
<span>&times;</span>
</button>
  <h1>${this.title}</h1>
  <form onsubmit="app.listController.addTask(event, '${this.id}')">
      <h5>Tasks:</h5>
      <hr/>
      <dl>
          ${this.Tasks}
      </dl>
      <!-- Material unchecked -->
      <div class="form-group">
          <label for="taskName"></label>
          <input type="text" name="taskName" class="form-control" placeholder="Type a task here"aria-describedby="helpId">
      </div>
  </form >
</div>`
    }

    get Tasks() {
            let template = ''
            this.tasks.forEach(task => template += task.getTemplate(this.id))
            return template
        }
        //Be sure to add the methods needed to create the view template for this model
        //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}