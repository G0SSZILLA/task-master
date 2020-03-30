import { generateId } from '../utils.js'


export default class Task {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
    }


    getTemplate(listId) {
        return /*html*/ `
    <dd>
    <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${listId}','${this.id}')">
      <span>&times;</span>
      </button>
      <h3>${this.title}<h3>
      <!-- Material unchecked -->
      </dd>
      <div class="form-check">
      <input type="checkbox" class="form-check-input bg-info mb-2 d-flex ml-5" id="materialUnchecked">
<label class="form-check-label"></label>
</div>
    `
    }
}