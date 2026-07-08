"use client";
import { Bell, Bookmark, ChefHat, Flower, Heart, LayoutDashboard, LogOut, Menu, Plus, Search, User, X } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Badge } from './ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import Link from 'next/link'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet';

const Navbar = () => {
    // TODO: use actual sessions
    const loggedIn = false;
    return (
        <nav className='border-b bg-white/80 backdrop-blur-lg border-gray-200 fixed z-1000 top-0 left-0 right-0'>
            <div className='w-[90%] flex justify-between items-center mx-auto py-4' >
                <Link href={"/"} className='flex items-center gap-1.5'>
                    {/* <ChefHat size={32} className='text-[#286749]' /> */}
                    <Flower size={32} className='text-[pink]' />
                    <span className='font-serif font-semibold text-xl'>Ora</span>

                </Link>

                <div className='hidden xl:flex'>
                    <Button variant={"outline"} className='border-0 font-normal text-[16px] font-sans' asChild>
                        <Link href={"/login"}>Home</Link>
                    </Button>
                    <Button variant={"outline"} className='border-0 font-normal text-[16px] font-sans' asChild>
                        <Link href={"/login"}>Browse</Link>
                    </Button>
                    <Button variant={"outline"} className='border-0 font-normal text-[16px] font-sans' asChild>
                        <Link href={"/login"}>Categories</Link>
                    </Button>
                </div>

                <div className='hidden md:flex items-center border rounded-md bg-[#f9f9f9] sm:w-sm md:w-md lg:w-lg px-3 focus-within:ring-2 focus-within:ring-ring'>
                    <Search className='h-4 w-4 text-muted-foreground' />
                    <Input placeholder='Search recipes...' className='border-0  shadow-none focus-visible:ring-0 focus-visible:ring-offset-0' />
                </div>

                <div className='hidden md:flex gap-2'>
                    {loggedIn ? <>
                        <Button className='hidden xl:flex' asChild>
                            <Link href={"/add-recipe"}>
                                <Plus /><span>Add Recipe</span>
                            </Link>
                        </Button>
                        <Button className='hidden lg:flex xl:hidden' asChild>
                            <Link href={"/add-recipe"}>
                                <Plus /> Add
                            </Link>
                        </Button>
                        <Button variant={"ghost"} asChild>
                            <Link href={"/saved-recipes"}>
                                <Bookmark />
                            </Link>
                        </Button>
                        <Button variant={"ghost"} className='relative' asChild>
                            <Link href={"/notifications"}>
                                <Bell />
                                <Badge className='absolute -top-0.5 -right-0.5 h-4 w-4 p-0 text-[10px] bg-[#286749]'>2</Badge>
                            </Link>
                        </Button>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarFallback>M</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end' className='min-w-fit z-1000000'>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel className='whitespace-nowrap'>
                                        <p className='text-[14px] text-black font-semibold'>Manqoba Mashego</p>
                                        <p>manqoba.mashego@imaginescholar.org</p>
                                    </DropdownMenuLabel>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem asChild>
                                        <Link href={"/dashboard"}>
                                            <LayoutDashboard />
                                            <span>Dashboard</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={"/profile"}>
                                            <User />
                                            <span>Profile</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={"/favourites"}>
                                            <Bookmark />
                                            <span>Saved</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <DropdownMenuItem variant='destructive' onSelect={(e) => e.preventDefault()}>
                                                <LogOut />
                                                <span>Logout</span>
                                            </DropdownMenuItem>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you sure that you want to logout?</DialogTitle>
                                                <DialogDescription>You will be logged out of your Cooked account.</DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button variant={"outline"}>Cancel</Button>
                                                </DialogClose>
                                                <Button type='submit' variant={"primary"}>Logout</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </> : <>
                        <Button variant={"outline"} className='border-0 font-normal text-[16px] font-sans' asChild>
                            <Link href={"/login"}>Login</Link>
                        </Button>
                        <Button className='bg-[#286749] font-sans' asChild>
                            <Link href={"/signup"}>Sign Up</Link>
                        </Button>
                    </>}
                </div>

                <div className='block md:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"ghost"} size={"icon"}><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent className="p-6" side='left' showCloseButton={false}>
                            <div className="flex items-center justify-between">
                                <Link href={"/"} className='flex items-center gap-1.5'>
                                    <ChefHat size={25} className='text-[#286749]' />
                                    <span className='font-serif font-semibold text-lg'>Cooked</span>
                                </Link>
                                <SheetClose asChild>
                                    <Button variant={"ghost"} size={"icon"}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </SheetClose>

                            </div>
                            <div className='flex mt-2 items-center border rounded-3xl bg-[#f9f9f9]  w-full pl-4 pr-3 py-1 focus-within:ring-2 focus-within:ring-ring'>
                                <Search className='h-4 w-4 text-muted-foreground' />
                                <Input placeholder='Search recipes...' className='border-0  shadow-none focus-visible:ring-0 focus-visible:ring-offset-0' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Link href={"/add-recipe"} className='flex gap-1.5 items-center py-2.5 pl-4 rounded-xl transition-all duration-200 bg-[#286749] hover:bg-[#225c41] text-[16px] text-white'>
                                    <Plus size={18} /><span>Add Recipe</span>
                                </Link>
                                <Link href={"/favourites"} className='mobile-link '>
                                    <Bookmark size={18} /><span>Saved Recipes</span>
                                </Link>
                                <Link href={"/dashboard"} className='mobile-link '>
                                    <LayoutDashboard size={18} /><span>Dashboard</span>
                                </Link>
                                <Link href={"/profile"} className='mobile-link '>
                                    <User size={18} /><span>Profile</span>
                                </Link>
                            </div>
                            <SheetFooter>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className='text-[red] text-[16px] bg-[#ff00001f] flex gap-2 items-center py-2.5 pl-4 rounded-xl transition-all duration-200 ' >
                                            <LogOut size={18} />
                                            <span>Logout</span>
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you sure that you want to logout?</DialogTitle>
                                            <DialogDescription>You will be logged out of your What's Cooking account.</DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button variant={"outline"}>Cancel</Button>
                                            </DialogClose>
                                            <Button type='submit'>Logout</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar