export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">Cookly</h1>
        <div className="flex gap-4">
          <button className="text-sm">Browse</button>
          <button className="text-sm">Login</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">
          What do you want to cook today?
        </h2>

        {/* BIG SEARCH */}
        <div className="max-w-xl mx-auto flex gap-2 mt-6">
          <input
            className="w-full border rounded-xl px-4 py-3"
            placeholder="Search recipes, ingredients..."
          />
          <button className="bg-black text-white px-6 rounded-xl">
            Search
          </button>
        </div>

        {/* QUICK TAGS */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["Chicken", "Quick meals", "Vegan", "Desserts", "Breakfast"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </section>

      {/* FEATURED RECIPES */}
      <section className="px-6 pb-16">
        <h3 className="text-xl font-semibold mb-4">Featured Recipes</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-xl overflow-hidden">
              <div className="h-40 bg-gray-200" />
              <div className="p-3">
                <h4 className="font-medium">Recipe Title</h4>
                <p className="text-sm text-gray-500">30 min • Easy</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t">
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Browse All Recipes
        </button>
      </section>
    </div>
  );
}