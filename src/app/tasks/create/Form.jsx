'use client';

import { createTask } from '@/actions';
import React from 'react';
import { useRouter } from 'next/navigation';

const createTaskForm = () => {
    const [actionState, action] = React.useActionState(createTask, {errors: {}, fields: {}});
    
    const router = useRouter();
    React.useEffect(() => {
        if (actionState.success) {
            router.push('/');
        }
    }, [actionState.success, router]);

    return (
        <form action={action} className="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-md">
            {actionState?.errors?.message &&(
                <div className='bg-red-500 text-white p-2 rounded'>
                    <p className=''>{actionState.errors.message}</p>
                </div>
            )}
            
            <label htmlFor="title">
                <span className="font-bold">Title: </span>
                <input
                    type="text"
                    id='title'
                    name="title"
                    placeholder="Type a title"
                    required
                    className="w-full px-2 py-1 border rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    defaultValue={actionState?.fields?.title ?? ''}
                    />
                    
                
                {actionState?.errors?.title && (
                    <span className="text-red-500 text-sm">{actionState.errors.title}</span>
                )}
            </label>

            <label htmlFor="description">
                <span className="font-bold">Description: </span>
                <textarea
                    type="text"
                    id='description'
                    name="description"
                    placeholder="Digite a tarefa"
                    required
                    rows="4"
                    className="w-full px-2 py-1 border rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={actionState?.fields?.description ?? ''} />
                    
                {actionState?.errors?.description && (
                    <span className="text-red-500 text-sm">{actionState.errors.description}</span>
                )}
            </label>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >Create</button>
        </form>
    );
};

export default createTaskForm;