export default async function AlbumsHome() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) throw new Error('Error loading albums');
  
  const albums = await response.json();

  return (
    <div className="grid grid-cols-5">
      {albums.map((album: { id: number, title: string}) => (
        <div key={album.id} className="bg-white shadow-md rounded-lg p-4 max-w-md m-4">
          <h3 className="text-black text-lg font-bold mb-2">Album: {album.title}</h3>
          <p className="text-gray-600 ">ID: {album.id}</p>
      </div>
      ))}
    </div>
  );
}