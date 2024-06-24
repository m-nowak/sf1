'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Separator } from '../ui/separator'


import { Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const periods = [
    {
        value: "today",
        label: "Today",
    },
    {
        value: "Yesterday",
        label: "Yesterday",
    },
    {
        value: "This month",
        label: "This month",
    },
    {
        value: "This year",
        label: "This year",
    }
]





const MachineExpanded = ({mc}:{mc:string}) => {
    return (
        <div>

            <div className='flex h-5 items-center space-x-4 text-lg '>
                <div className='pl-2 font-semibold'>{mc}</div>
                <Separator orientation="vertical" />
                <div className=' flex justify-center items-center py-2 rounded-sm'>
                    Running
                </div>

                <Separator orientation="vertical" />
                <div className=' flex justify-start items-center py-2 mx-1'>
                    <Badge className='bg-green-600 text-white  hover:bg-green-600' >L1PM <Check
                        className="h-4"
                    />
                    </Badge>
                </div>
                <div className=' flex justify-start items-center py-2 mx-1'>
                    <Badge className='bg-red-600 text-white hover:bg-red-600' >QUALITY ISSUE</Badge>
                </div>
            </div>

            <div className=" flex  w-full gap-2">


                <Card className=' w-[232px] h-[480px] p-0 mt-4'>

                    <CardContent className='p-2'>
                        <div className='border-b flex justify-between items-center font-semibold text-xl py-2 mx-1 '>
                            Info
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>Operator</p>
                            <Avatar title="Michal Nowak">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1'>
                            <p className='text-sm'>MO</p>
                            <p className='font-semibold'>6787789</p>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1'>
                            <p className='text-sm'>Part No</p>
                            <p className='font-semibold'>EN6114K12-24</p>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>Operation</p>
                            <p className='font-semibold'>Grooving</p>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>Batch Qty</p>
                            <p className='font-semibold'>2500</p>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>Produced</p>
                            <p className='font-semibold'>1013</p>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>Time left</p>
                            <p className='font-semibold'>2h</p>
                        </div>
                        <div className='border-b flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>GAP</p>
                            <p className='font-semibold'>MS1</p>
                        </div>
                        <div className='flex justify-between items-center py-2 mx-1 '>
                            <p className='text-sm'>UAP</p>
                            <p className='font-semibold'>High Volume 1</p>
                        </div>



                    </CardContent>


                </Card>


                <Card className=' w-[350px] h-[480px] p-0 mt-4'>

                    <CardContent className='p-2'>
                        <div className='border-b flex justify-between items-center font-semibold text-xl py-2 mx-1 '>
                            Tools
                        </div>
                        <Table className='mt-4 p-0'>
                            <TableHeader >
                                <TableRow >
                                    <TableHead className="w-[180px] text-left">Tool</TableHead>
                                    <TableHead>Done</TableHead>

                                    <TableHead className="text-right">8T/KA</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                <TableRow>
                                    <TableCell className="font-medium text-left">Cutting tip</TableCell>
                                    <TableCell className="text-left">678796</TableCell>

                                    <TableCell className="text-right">8T78976</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-left">Roller</TableCell>
                                    <TableCell className="text-left">678799</TableCell>

                                    <TableCell className="text-right">8T78976</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-left">Roller3</TableCell>

                                    <TableCell className="text-left" >125674</TableCell>
                                    <TableCell className="text-right">8T78976</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-left">Roller</TableCell>

                                    <TableCell className="text-left">7897</TableCell>
                                    <TableCell className="text-right">8T78976</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-left">Cutting tip</TableCell>

                                    <TableCell className="text-left">176</TableCell>
                                    <TableCell className="text-right">8T78976</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className=' w-[350px] h-[480px] p-0 mt-4'>

                    <CardContent className='p-2'>
                        <div className='border-b flex justify-between items-center font-semibold text-xl py-2 mx-1 '>
                            Handover
                        </div>
                        <div className='flex h-[280px]  items-start py-2'>
                            <div className="flex items-start space-x-2 w-full p-1">
                                <Avatar title="Michal Nowak">
                                    <AvatarImage src="" />
                                    <AvatarFallback>MN</AvatarFallback>
                                </Avatar>
                                <div className="min-w-0 flex-auto ">
                                    <div className='flex items-center justify-between'>
                                        <p className="text-muted-foreground font-semibold text-sm leading-6">
                                            Michal Nowak
                                        </p>
                                        <p className='font-normal text-sm text-muted-foreground '>Yesterday</p>
                                    </div>

                                    <h2 className="t text-sm leading-4 truncate">
                                        Machine ok to run. No issues.
                                    </h2>

                                </div>
                            </div>
                        </div>
                        <Textarea autoFocus={false} tabIndex={1} className="resize-none" placeholder="Type your message here." />
                        <Button className='mt-2 w-full'>Send handover</Button>



                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
const Machine = ({mc}:{mc:string}) => {
    return (
        <><Card className=' w-[216px] h-[254px] p-0'>
            <CardHeader className='p-2'>
                <CardTitle>
                    <div className='flex justify-between items-center'>
                        <span>{mc}</span><div className=' text-sm border rounded-full p-1 '>GV</div>
                    </div>
                </CardTitle>

            </CardHeader>


            <CardContent className='p-2'>
                <div className='border-b flex justify-center items-center py-2 text-white bg-green-700 rounded-sm'>
                    <p>Running</p>


                </div>
                <div className='border-b flex justify-between items-center py-2 mx-1'>
                    <p className='text-sm'>MO</p>
                    <p className='font-semibold'>6787789</p>
                </div>
                <div className='border-b flex justify-between items-center py-2 mx-1'>
                    <p className='text-sm'>Operator</p>
                    <p className='font-semibold'>A01127</p>
                </div>
                <div className='border-b flex justify-between items-center py-2 mx-1'>
                    <p className='text-sm'>Qty</p>
                    <p className='font-semibold'>10000/40000</p>

                </div>
                <div className=' flex justify-between items-center py-2 mx-1 gap-1'>
                    <Badge className='bg-green-600 text-white  hover:bg-green-600' >L1PM <Check
                        className="h-4"
                    />
                    </Badge> <Badge className='bg-red-600 text-white hover:bg-red-600' >QUALITY ISSUE</Badge>
                </div>



            </CardContent>

        </Card>
        </>
    )
}


const MachineCard = ({mc}:{mc:string}) => {
    return (
        <Dialog >
            <DialogTrigger><Machine mc={mc} /></DialogTrigger>
            <DialogContent className='max-w-[996px]'>
                <DialogHeader>
                    <MachineExpanded mc={mc} />
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default MachineCard