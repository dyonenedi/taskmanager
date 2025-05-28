import {deleteTask} from '@/actions';
import Link from 'next/link';

const Button = ({link=null, actionId=null, color='blue', cta='Salvar'}) => {
  const colorMap = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
  };

  const colorMapHover = {
    blue: 'bg-blue-700',
    red: 'bg-red-700',
    yellow: 'bg-yellow-700',
    green: 'bg-green-700',
  };
  
  if (!colorMap[color]) {
    throw new Error(`Invalid color: ${color}. Valid colors are: ${Object.keys(colorMap).join(', ')}`);
  }

  return (
    <div className='flex'>
      { (actionId) ?
        <form action={deleteTask}>
            <input type="hidden" name="id" value={actionId} />
            <button href="#" className={`${colorMap[color]} hover:${colorMapHover[color]} text-white font-bold py-2 px-4 rounded`}>
              {cta}
            </button>
        </form>
        :
        <Link href={link} className={`${colorMap[color]} hover:${colorMapHover[color]} text-white font-bold py-2 px-4 rounded`}>
          {cta}
        </Link>
      }
    </div>
  );
};

export default Button;