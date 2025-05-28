import Button from "@/components/Button";
import { getManyTasks, toggleTaskStatus } from "@/actions";
import Checkbox from "@/components/Checkbox";

// export const revalidate = 10;
// export const dynamic = 'force-dynamic';

export default async function Home() {
  const tasks = await getManyTasks();

  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className={`${task.status === 'complete' ? 'bg-green-100' : 'bg-gray-100'} py-2 px-4 rounded-lg shadow`}>
              <div className="flex justify-between items-center"> 
                
                <div className="flex flex-col space-y-2"> 
                  <h2 className="text-xl font-semibold">{task.title}</h2>
                  <p>{task.description}</p>
                  
                  <div className="flex gap-2">
                    <Button link={`/tasks/${task.id}`} color="blue" cta="Visualizar"/>
                    <Button link={`/tasks/${task.id}/edit/`} color="yellow" cta="Editar"/>
                    <Button actionId={task.id} color="red" cta="Excluir"/>
                  </div>
                </div>

                <div className="flex">
                  <form action={toggleTaskStatus}>
                    <input type="hidden" name="id" value={task.id} />
                    <Checkbox checked={task.status === 'complete'} />
                  </form>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
