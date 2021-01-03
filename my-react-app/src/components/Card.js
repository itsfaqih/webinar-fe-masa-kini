export default function Card({ title, desc, deleteTask }) {
  return (
    <div class="w-full bg-white rounded-lg p-4">
      <h2 class="font-bold mb-1">{title}</h2>
      <p class="text-coolGray-500">{desc}</p>
      <button onClick={deleteTask}>Hapus</button>
    </div>
  );
}
