'use server';

import { prisma } from '@/../lib/prisma'
import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';


//########### TASK ACTIONS ###########//
export const getManyTasks = async () => {
    const tasks = await prisma.task.findMany({
        orderBy: { status: 'desc' }
    });
    return tasks;
};

export const getTaks = async (id) => {
    id = Number(id);
    const task = await prisma.task.findUnique({
        where: { id },
    });

    if (!task) {
        return notFound();
    }

    return task;
};

export const createTask = async (actionState, formData) => {
    try {
        const validationError = validateTaskForm(formData);
        if (validationError) {
            return validationError;
        }

        const title = formData.get('title');
        const description = formData.get('description');

        const data = await prisma.task.create({
            data: {
                title,
                description
            }
        });

        if (!data) {
            return <div>Error creating task</div>
        } else {
            revalidatePath('/');
            return {success: true};
        }
    } catch (error) {
        const message = error;
        return {errors: message}
    }
    
}

export const updateTask = async (actionState, formData) => {
    try{
        const validationError = validateTaskForm(formData);
        if (validationError) {
            return validationError;
        }
    
        const title = formData.get('title');
        const description = formData.get('description');
        const id = Number(formData.get('id'));
        
        const data = await prisma.task.update({
            where: { id },
            data: {
                title,
                description
            }
        });
    
        if (!data) {
            return <div>Error editing task</div>
        } else {
            revalidatePath('/');
            return {success: true};
        }
    } catch (error) {
        const message = error;
        return {errors: message}   
    }
};

export const deleteTask = async (formData) => {
    const id = Number(formData.get('id'));
    const dada = await prisma.task.delete({
        where: { id }
    });

    if (dada) {
        revalidatePath('/');
    }
};

export const toggleTaskStatus = async (formData) => {
    const id = Number(formData.get('id'));
    const task = await getTaks(id);
    const newStatus = task.status === 'pending' ? 'complete' : 'pending';
    
    const data = await prisma.task.update({
        where: {id},
        data: {status: newStatus}
    });

    if (!data) {
        throw new Error('Error toggling task status');
    } else {
        revalidatePath('/');
    }
}

//########### TASK AUX FUNCTIONS ###########//

const validateTaskForm = (formData) => {
    const minTitleLength = 3;
    const minTextLength = 10;
    const title = formData.get('title')?.toString().trim() || '';
    const description = formData.get('description')?.toString().trim() || '';

    if (title.length < minTitleLength) {
        return {
            errors: { title: `Title não pode ter menos de ${minTitleLength} caracteres` },
            fields: { title, description }
        };
    }
    if (description.length < minTextLength) {
        return {
            errors: { description: `Descrição não pode ter menos de ${minTextLength} caracteres` },
            fields: { title, description }
        };
    }

    return null;
}