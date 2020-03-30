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
      <!-- Material unchecked -->
<div class="form-check">
<input type="checkbox" class="form-check-input bg-info my-3 d-flex ml-5" id="materialUnchecked">
<label class="form-check-label"><h3>${this.title}<h3></label>
</div>
      </dd>
    `
    }
}