'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from "@/components/ui/button"
import {
    Command,

    CommandGroup,

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



const HealthSafetyCard = () => {
    return (
        <div><Card className=' w-72'>
            <CardHeader>
                <CardTitle>
                    <div className='flex justify-between items-center py-2'>
                        <span>H&S</span>
                        <Combobox />
                    </div>
                </CardTitle>
                <CardDescription>3544 days whith no time lost accident</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>TF1</p>
                    <p className=" font-semibold text-lg">0</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>TF0</p>
                    <p className=" font-semibold text-lg">6</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>Environmentals issues</p>
                    <p className=" font-semibold text-lg">3</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>Fires</p>
                    <p className=" font-semibold text-lg">5</p>
                </div>
                <div className='border-t flex justify-between items-center py-2'>
                    <p>Near Misses</p>
                    <p className=" font-semibold text-lg">5</p>
                </div>

            </CardContent>

        </Card>
        </div>
    )
}

export default HealthSafetyCard