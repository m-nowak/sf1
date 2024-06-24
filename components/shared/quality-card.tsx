'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

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

export function Combobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("This month")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100px]"
                >
                    {value
                        ? periods.find((period) => period.value === value)?.label
                        : ""}

                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[100px] p-0">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {periods.map((period) => (
                                <CommandItem
                                    key={period.value}
                                    value={period.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >

                                    {period.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}



const QualityCard = () => {
    return (
        <div><Card className=' w-72 h-[381px]'>
            <CardHeader>
                <CardTitle>
                    <div className='flex justify-between items-center py-2'>
                        <span>Quality</span>
                        <Combobox />
                    </div>
                </CardTitle>
                <CardDescription>14 days whith no racar</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>Racars</p>
                    <p className=" font-semibold text-lg">0</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>BRR</p>
                    <p className=" font-semibold text-lg">6</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>CONQ</p>
                    <p className=" font-semibold text-lg">3</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>Quality issues</p>
                    <p className=" font-semibold text-lg">5</p>
                </div>


            </CardContent>

        </Card>
        </div>
    )
}

export default QualityCard