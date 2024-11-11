import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://api.github.com/users', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    }
  });
  
  if (!res.ok) {
    throw new Error("Falha ao buscar dados dos usuários do GitHub");
  }

  const users = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Lista de Usuários do GitHub
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map(user => (
            <li 
              key={user.id} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Link href={`/user/${user.login}`} className="block text-center">
              <img 
                src={user.avatar_url} 
                alt={`${user.login} avatar`} 
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                {user.login}
              </h2>
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
