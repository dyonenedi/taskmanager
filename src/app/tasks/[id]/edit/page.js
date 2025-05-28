import {getTaks} from '@/actions';
import EditTaskForm from './Form';

export default async function EditPage({ params }) {
  const {id} = await params;
  const task = await getTaks(id);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className='text-2xl font-bold text-center'>Editing: {task.title}</h1>

      <EditTaskForm task={task} />
    </div>
  );
}