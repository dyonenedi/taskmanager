import { getTaks } from '@/actions';

export default async function taskPage({ params }) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay
    
    const { id } = await params;
    const task = await getTaks(id);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-8">Tasks</h1>
            <div className='mx-auto max-w-md shadow-lg rounded p-8 mt-10 bg-white'>
                <h2 className='text-xl font-bold mb-4'>Title: {task.title}</h2>
                <p>Description: {task.description}</p>
                <i className='text-sm'>Status: {task.status}</i>
            </div>
        </div>
    );
}