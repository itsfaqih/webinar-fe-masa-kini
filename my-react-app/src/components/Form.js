export default function Form({ addTask, handleFormChange }) {

  return (
    <div className="p-4">
      <input className="h-10 px-3" type="text" name="judul" placeholder="Judul" onChange={handleFormChange} />
      <input className="h-10 px-3 ml-2" type="text" name="deskripsi" placeholder="Deskripsi" onChange={handleFormChange} />
      <button className="px-4 h-10 bg-indigo-500 text-white ml-3" onClick={addTask}>Simpan Task</button>
    </div>
  );
}
