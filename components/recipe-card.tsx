import React, { Dispatch, SetStateAction } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Bookmark, Clock } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'

type Recipe = {
    img_url: string;
    title: string;
    description: string
}

type RecipeProps = {
    recipe: Recipe;
    saved: boolean;
    setSaved: Dispatch<SetStateAction<boolean>>;
    index: number 
}

const RecipeCard = ({recipe, saved, setSaved, index}: RecipeProps) => {
    return (
        <Card className='relative pt-0 min-h-100 group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' key={index}>
            <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 backdrop-blur transition hover:scale-105 hover:bg-white" onClick={() => setSaved(!saved)}>
                <Bookmark className={`transition-colors duration-200 ${saved ? "text-[orange] fill-[orange]" : ""}`} />
            </button>
            <div className="relative">
                <img src={recipe.img_url} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <CardHeader className='flex flex-col gap-2 space-y-1 px-6 pt-1.5'>
                <CardTitle className='font-bold text-xl'>{recipe.title}</CardTitle>
                <CardDescription className='line-clamp-2 text-gray-600'>{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent >
                <div className='mt-2 flex justify-between items-center space-y-1 px-2 pt-1.5'>
                    <div className='flex gap-2.5 items-center'>
                        <Avatar className='bg-purple-500' size='lg'>
                            <AvatarFallback className='bg-purple-500 text-white'>J</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='font-semibold'>John Doe</p>
                            <p className='text-xs text-gray-500'>2 days ago</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="rounded-full text-gray-600 flex gap-1 items-center px-3 py-1 text-xs font-medium ">
                            <Clock size={14} />
                            <span>25 min</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default RecipeCard