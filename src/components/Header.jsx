import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4'>
        <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Task List</Link>
            <Link href="/tasks/create" className="text-2xl font-bold">Create</Link>
        </nav>
    </header>
  );
};

export default Header;