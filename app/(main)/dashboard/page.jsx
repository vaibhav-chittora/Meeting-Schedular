"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usernameSchema } from '@/app/lib/zodValidators'
import { useEffect } from 'react'
import { updateUsername } from '@/actions/users'
import { BarLoader } from 'react-spinners'
import useFetch from '@/hooks/use-Fetch'


const Dashboard = () => {
    const { isLoaded, user } = useUser()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(usernameSchema)
    })
    useEffect(() => {
        setValue("username", user?.username)
    }, [isLoaded])

    const { error, loading, fn: updateUsernameFunction } = useFetch(updateUsername)

    const onSubmit = async (data) => {
        updateUsernameFunction(data?.username)
    }


    return (
        <div className='space-y-8'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Welcome to your dashboard, {user?.firstName}
                    </CardTitle>
                    {/* Latest activity */}
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Your unique link
                    </CardTitle>
                    {/* Latest activity */}
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        <div className=''>

                            <div className='flex items-center gap-2'>
                                <span>
                                    {window.location.origin}/
                                </span>
                                <Input
                                    placeholder='username'
                                    {...register('username')}
                                />
                            </div>
                            {errors.username && (
                                <p className='text-red-500'>
                                    {errors.username.message}
                                </p>
                            )}
                            {error && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {error?.message}
                                </p>
                            )}
                        </div>


                        {loading && <BarLoader className='mb-4 ' width={'100%'} color='#36d7b7' />}
                        <Button type='submit'>
                            Update
                        </Button>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}

export default Dashboard