function App() {
  return (
    <div className="flex flex-col min-h-screen bg-red-300">
      <div className="w-full bg-purple-50">
        <h1 className="text-3xl font-bold text-center text-fuchsia-500">
          Dailees
        </h1>
      </div>
      <div>
        <p className=" mt-3 ml-2 text-center text-rose-100">
          This is a daily checklist, that feeds into weekly and monthly progress
        </p>
      </div>
      <div className="w-full h-full p-7 bg-amber-50">
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <div className="w-64 h-64  bg-amber-400">
            <h1 className="text-2xl text-blue-950">Professional Skill</h1>
            <ul className="mt-2">
              <li>Apply 2 per day</li>
              <li>Relearn Coding</li>
              <li>Create the analyst Case Study</li>
            </ul>
          </div>
          <div className="w-64 h-64  bg-red-400">
            <h1 className="text-2xl text-blue-950">Personal Skill</h1>
            <ul className="mt-2">
              <li>Speaking practice</li>
              <li>Sudoku faster better</li>
            </ul>
          </div>
          <div className="w-64 h-64  bg-blue-400">
            <h1 className="text-2xl text-blue-950">Media</h1>
            <ul className="mt-2">
              <li>Watch Movies</li>
              <li>Watch Series</li>
              <li>analyze in my own word and have opinions</li>
            </ul>
          </div>
          <div className="w-64 h-64  bg-amber-400">
            <h1 className="text-2xl text-blue-950">Wellbeing</h1>
            <ul className="mt-2">
              <li>Weekly exercise plan accordance</li>
              <li>Priming</li>
            </ul>
          </div>
          <div className="w-64 h-64  bg-red-400">
            <h1 className="text-2xl text-blue-950">Spiritual</h1>
            <ul className="mt-2">
              <li>Quran</li>
              <li>Sunat prayer</li>
              <li>Dzikr</li>
            </ul>
          </div>
          <div className="w-64 h-64  bg-blue-400">
            <h1 className="text-2xl text-blue-950">Reading</h1>
            <ul className="mt-2">
              <li>Read 5 pages</li>
              <li>Read 1 fact/ non-fiction</li>
              <li>Know what it is about</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App;
