"use client";
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import GoogleIcon from './icons/GoogleIcon'
import { Separator } from './ui/separator'
import { Field, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import PasswordInput from './password-input'
import LoadingButton from './loading-button'
import Link from 'next/link'

const LoginForm = () => {
	const [loading, setLoading] = useState(false);
	const handleClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		setTimeout(()=>{
			setLoading(!loading);
		}, 2000)
	}
	return (
		<Card className='w-full max-w-md text-center'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold'>Welcome back</CardTitle>
				<CardDescription>Sign in to continue cooking with Cooked</CardDescription>
			</CardHeader>
			<CardContent>
				<button className="w-full gap-2 bg-[#f9f9f9] py-2 border-border text-[15px] hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
					<GoogleIcon width="0.98em" height="1em"/>
					<span>Continue with Google</span>
				</button>
				<div className="flex items-center gap-4 mt-7">
					<Separator className='flex-1'/>
					<span className='text-sm text-muted-foreground'>OR</span>
					<Separator className='flex-1'/>
				</div>
				<form className='mt-5 pl-1'>
					<FieldGroup>
						<Field>
							<FieldLabel className='text-[15px]'>Email</FieldLabel>
							<Input id='email' autoComplete='off' className='py-4 text-[15px]'/>
						</Field>
						<Field>
							<FieldLabel className='text-[15px]'>Password</FieldLabel>
							<PasswordInput className='py-4'/>
						</Field>
					</FieldGroup>
					<LoadingButton size={"lg"} className='w-full mt-6 py-2' loading={loading} onClick={(e) => e.preventDefault()}>Login</LoadingButton>
				</form>
			</CardContent>
			<CardFooter>
				<div className="flex w-full justify-center">
					<p className="text-muted-foreground text-center text-xs flex gap-1">
						<span>Don't have an account?</span>
						<Link href="/sign-up" className="underline transition-all duration-200 hover:text-[#000000]">Sign up</Link>
					</p>
				</div>
			</CardFooter>
		</Card>
	)
}

export default LoginForm