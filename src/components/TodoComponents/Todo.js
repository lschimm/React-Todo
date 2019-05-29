// `<Todo />` is a component that takes in the `todo`
// data and displays the task to the screen.

import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    task: 'Eat',
                    id: 456,
                    completed: false
                },
                {
                    task: 'Sleep',
                    id: 789,
                    completed: false
                }
            ]
        }
    }
}



export default TodoForm;