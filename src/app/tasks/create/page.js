import CreateTaskForm from './Form';

export default function CreateTaskPage(){
    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center">Create task</h1>
            
            <CreateTaskForm />
        </div>
    )
}