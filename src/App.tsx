import { FaTrashAlt } from "react-icons/fa";
import './App.css'

function App() {
  return (
    <>
      <p>Chores ToDo List</p>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Create Guest Experience mobile check-in</label>
        <button><FaTrashAlt /></button>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Document current CI/CD process</label>
        <button><FaTrashAlt /></button>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Perform Code Review for final Pillow-Talk release</label>
        <button><FaTrashAlt /></button>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Implement new Color Palette from Design Team</label>
        <button><FaTrashAlt /></button>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Fix image uploading process for guest check-in</label>
        <button><FaTrashAlt /></button>
      </div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Provide on-boarding documentation</label>
        <button><FaTrashAlt /></button>
      </div>
      <p>-----------------------------------------------------------------------</p>
      <p>Done : 0</p>
      <p>Add todo</p>
      <div>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </input>
      </div>
      <button>ADD TASK</button>
    </>
  )
}

export default App
