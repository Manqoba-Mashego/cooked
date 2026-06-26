import React from 'react'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Heart } from 'lucide-react'
// import Image from 'next/image'

const Featured = () => {
    const recipes = [
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5o9HQKEBogv6e6eeI-8veows7FpZH2-2TmqdXfnPjQ&s=10",
            title: "Simple Chicken Recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla sit amet diam eu dapibus.",

        },
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5o9HQKEBogv6e6eeI-8veows7FpZH2-2TmqdXfnPjQ&s=10",
            title: "Simple Chicken Recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla sit amet diam eu dapibus.",

        },
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5o9HQKEBogv6e6eeI-8veows7FpZH2-2TmqdXfnPjQ&s=10",
            title: "Simple Chicken Recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla sit amet diam eu dapibus.",

        },
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5o9HQKEBogv6e6eeI-8veows7FpZH2-2TmqdXfnPjQ&s=10",
            title: "Simple Chicken Recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla sit amet diam eu dapibus.",

        },
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5o9HQKEBogv6e6eeI-8veows7FpZH2-2TmqdXfnPjQ&s=10",
            title: "Simple Chicken Recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla sit amet diam eu dapibus.",

        },
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5o9HQKEBogv6e6eeI-8veows7FpZH2-2TmqdXfnPjQ&s=10",
            title: "Simple Chicken Recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla sit amet diam eu dapibus.",

        },
    ]
  return (
    <div className='w-[80%] mx-auto'>
        <p className='text-2xl font-bold mb-5'>Featured Recipes</p>
        <div className='grid grid-cols-3 gap-5'>
            {recipes.map((recipe, index) => (
                <Card className='relative pt-0' key={index}>
                    <img src={recipe.img_url} alt="Food" className='relative z-20 aspect-video w-full object-cover'/>
                    <CardHeader>
                        <CardAction className='text-green-500 bg-green-100 py-1 px-2.5 rounded-2xl'>Easy</CardAction>
                        <CardTitle>{recipe.title}</CardTitle>
                        <CardDescription>{recipe.description}</CardDescription>
                        <div className='mt-2 flex justify-between '>
                            <div className='flex gap-2 items-center'>
                                <Avatar size='sm'>
                                    <AvatarFallback>J</AvatarFallback>
                                </Avatar>
                                <p>John Doe</p>
                            </div>
                            <div className='flex gap-3'>
                                <Heart className='text-gray-400' size={17}></Heart>
                                <p>11</p>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default Featured