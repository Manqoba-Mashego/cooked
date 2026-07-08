"use client";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Bookmark, Clock, Heart } from 'lucide-react'
import { useState } from 'react';
import RecipeCard from './recipe-card';
// import Image from 'next/image'

const Featured = () => {
    const [saved, setSaved] = useState(false);
    const recipes = [
    {
        img_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        title: "Creamy Garlic Chicken Pasta",
        description: "Tender chicken tossed in a rich garlic parmesan sauce with perfectly cooked pasta for a quick and comforting dinner.",
    },
    {
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52sF2gN5eQUkOkdzXns2-gawWSI-NRQF1izFrHkXJXg&s=10",
        title: "Classic Beef Burger",
        description: "Juicy grilled beef patties layered with fresh lettuce, tomatoes, and melted cheese on a toasted bun.",
    },
    {
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs0IDEsyHS9lDf9vGBqooOGTNaYcC4p1tyUvfFmHk1g&s=10",
        title: "Fresh Garden Salad",
        description: "A colorful mix of crisp vegetables topped with feta cheese and a light homemade vinaigrette dressing.",
    },
    {
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nRnvUVOQkiaxtC4b74ncSTLCgsysKDZ-apCDJrbaBw&s=10",
        title: "Spicy Shrimp Tacos",
        description: "Soft tortillas filled with seasoned shrimp, crunchy slaw, and a creamy chipotle sauce for extra flavor.",
    },
    {
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuw0BtUBAJRdjOvJqB_j-7fwkgDPZXyUk09oidq27jAR9TV_Vt3cPfC5g&s=10",
        title: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center, served best with vanilla ice cream or fresh berries.",
    },
    {
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs0IDEsyHS9lDf9vGBqooOGTNaYcC4p1tyUvfFmHk1g&s=10",
        title: "Homestyle Pancake Stack",
        description: "Fluffy golden pancakes drizzled with maple syrup and topped with fresh strawberries and whipped cream.",
    },
]
  return (
    <div className='w-[80%] mx-auto'>
        <p className='text-2xl font-bold mb-5'>Featured Recipes</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10'>
            {recipes.map((recipe, index) => (
                <RecipeCard recipe={recipe} saved={saved} setSaved={setSaved} index={index} />
            ))}
        </div>
        <div className="text-center mt-15 mb-20">
            <button className="bg-black text-white px-6 py-3 rounded-xl">
            Browse All Recipes
            </button>
        </div>
    </div>
  )
}

export default Featured