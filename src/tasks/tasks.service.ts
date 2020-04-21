import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { TaskDto } from './dto/taskDto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: uuidv4(),
            title: 'task one',
            description: 'new task',
            status: TaskStatus.DONE,
        },
        {
            id: uuidv4(),
            title: 'task two',
            description: 'new task',
            status: TaskStatus.OPEN,
        },
        {
            id: uuidv4(),
            title: 'task three',
            description: 'new task',
            status: TaskStatus.IN_PROGRESS,
        }
    ];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string) {
        return this.tasks.find(task => task.id === id);
    }

    createTask(taskDto: TaskDto) {
        const { title, description } = taskDto;
        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.OPEN,
        }

        this.tasks.push(task);

        return task;
    }

    deleteTask(id: string): Task[] {
        return this.tasks.filter(task => task.id !== id);
    }
}
