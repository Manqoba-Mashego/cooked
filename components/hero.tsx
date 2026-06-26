import React from 'react'

const Hero = () => {
    const tags = ["Chicken", "Quick meals", "Vegan", "Desserts", "Breakfast"];
  return (
    <div className="text-center  min-h-[60vh] flex items-end justify-center py-20 px-4">
        <div>
            <h2 className="text-4xl font-bold mb-4">What do you want to cook today?</h2>
            <div className="max-w-xl mx-auto flex gap-2 mt-6">
                <input className="w-full bg-white border rounded-xl px-4 py-3" placeholder="Search recipes, ingredients..."/>
                <button className="bg-black text-white px-6 rounded-xl">Search</button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
            {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tag}</span>
                )
            )}
            </div>
        </div>
      </div>
  )
}

export default Hero