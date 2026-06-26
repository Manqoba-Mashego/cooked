export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* TOP BAR */}
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Browse Recipes</h1>

        {/* SMALL SEARCH */}
        <input
          className="border rounded-lg px-3 py-2 w-72"
          placeholder="Search recipes..."
        />
      </div>

      <div className="flex">

        {/* FILTER SIDEBAR */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <h3 className="font-semibold mb-3">Filters</h3>

          <div className="space-y-4 text-sm">

            <div>
              <p className="font-medium">Meal Type</p>
              {["Breakfast", "Lunch", "Dinner"].map((t) => (
                <label key={t} className="block">
                  <input type="checkbox" /> {t}
                </label>
              ))}
            </div>

            <div>
              <p className="font-medium">Difficulty</p>
              {["Easy", "Medium", "Hard"].map((t) => (
                <label key={t} className="block">
                  <input type="checkbox" /> {t}
                </label>
              ))}
            </div>

          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">

          {/* SORT BAR */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">120 recipes found</p>

            <select className="border rounded px-3 py-1 text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Quickest</option>
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border rounded-xl overflow-hidden">

                <div className="h-36 bg-gray-200" />

                <div className="p-3">
                  <h4 className="font-medium">Recipe Name</h4>
                  <p className="text-sm text-gray-500">
                    25 min • Easy • 4.5⭐
                  </p>

                  <button className="mt-2 text-sm text-blue-600">
                    View Recipe
                  </button>
                </div>

              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}