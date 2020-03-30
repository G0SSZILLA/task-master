import { generateId } from '../utils.js'


export default class Task {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
    }


    getTemplate(listId) {
        return /*html*/ `
    <dd>
    <button type="button" class="close text-danger" onclick="app.ListController.deleteTask('${listId}','${this.id}')">
      <span>&times;</span>
      </button>
      <h3 class="mt-5" >${this.title}
      <div class="form-check">
      <input type="checkbox" class="form-check-input d-flex shadow" id="materialUnchecked">
      <label class="form-check-label" for="materialUnchecked"></label>
      </div></h4>
      </dd>
    `
    }
}