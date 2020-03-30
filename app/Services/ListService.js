import List from "../Models/List.js";
import _store from "../store.js";
import Task from "../Models/Task.js";
//Public
class ListService {


    addTask(newTaskData, listId) {
        let newTask = new Task(newTaskData)
        let list = _store.State.lists.find(list => list.id == listId)
        list.tasks.push(newTask)
        _store.saveState()
    }
    delete(listId) {
        let index = _store.State.lists.findIndex(list => list.id == listId)
        _store.State.lists.splice(index, 1)
        _store.saveState()
        console.log('delete');

    }

    create(newListData) {
        let newList = new List(newListData)
        _store.State.lists.push(newList)
        _store.saveState()
    }

    //TODO  Here is where we handle all of our business logic,
    //given the information you need in the controller,
    //what methods will you need to do when this class is first 'constructed'?
    //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;