"use client";

import React from 'react';
import { updateTask } from '@/actions';
import { useRouter } from 'next/navigation';

export const EditTaskForm = ({ task }) => {
    const [actionState, action] = React.useActionState(updateTask, {errors: {}, fields: {}});
    
    const router = useRouter();
    React.useEffect(() => {
        if (actionState.success) {
            router.push('/');
        }
    }, [actionState.success, router]);

    return (
        <form action={action} className="flex flex-col gap-4 bg-white shadow-lg rounded-md p-8">
            {actionState?.errors?.message &&(
                <div className='bg-red-500 text-white p-2 rounded'>
                    <p className=''>{actionState.errors.message}</p>
                </div>
            )}

            <input type="hidden" name="id" value={task.id} />
            <label htmlFor='title'>
                <span className='font-bold'>Title:</span>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={actionState?.fields?.title ?? task.title}
                    required
                    className='border rounded py-1 px-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                {actionState.errors?.title && (
                    <i className="text-red-500 text-sm">{actionState.errors.title}</i>
                )}
            </label>

            <label htmlFor='description'>
                <span className='font-bold'>Description:</span>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={actionState?.fields?.description ?? task.description}
                    required
                    rows='4'
                    className='border rounded px-2 py-1 w-full hover: border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </label>

            {actionState.errors?.description && (
                <i className="text-red-500 text-sm">{actionState.errors.description}</i>
            )}

            <button type="submit" className="bg-blue-500 text-white rounded py-1">Save</button>
        </form>
    );
};

export default EditTaskForm;