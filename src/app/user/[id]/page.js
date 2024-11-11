export default async function UserDetail({ params }) {
  const { id } = params;

  const res = await fetch(`https://api.github.com/users/${id}`);
  
  if (!res.ok) {
    return <p>Usuário não encontrado</p>;
  }
  
  const user = await res.json();

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name || user.login}</h1>
          <p className="text-gray-500">@{user.login}</p>
        </div>
      </div>
      
      <p className="mt-4 text-gray-700">{user.bio || "Sem descrição disponível"}</p>
      
      <div className="flex space-x-6 mt-6">
        <span className="text-sm text-gray-600">
          🌟 {user.followers} Seguidores
        </span>
        <span className="text-sm text-gray-600">
          📁 {user.public_repos} Repositórios
        </span>
      </div>
      
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        Visite o Perfil no GitHub
      </a>
    </div>
  );
}
