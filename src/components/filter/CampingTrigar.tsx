import React from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

interface CampingTrigarData {
    label: string,
    id: string,
    defaultChecked?: boolean
}

function CampingTrigar() {
    const [open, isOpen] = React.useState<boolean>(true)
    const handleOnClick = () => {
        isOpen(prev => !prev);
    };

    const data: CampingTrigarData[] = [
        {
            label: "Select All",
            id: "selectall",
            defaultChecked: true
        },
        {
            label: "Pizza",
            id: "pizza"
        },
        {
            label: "Burger",
            id: "burger"
        },
        {
            label: "Pocora",
            id: "pocora"
        }
    ]
    return (
        <div className="w-80 h-auto p-3 border ml-1.5 mb-4">
            <div className="w-full flex justify-between items-center cursor-pointer">
                <h2>Camping Trigar</h2>
                <div className='flex items-center gap-3'>
                    {/* <Search /> */}
                    <ChevronDown
                        onClick={() => handleOnClick()}
                        className={`${open ? "" : "rotate-180"}`} />
                </div>
            </div>
            <div className={`${open ? "block mt-3" : "hidden"}`}>
                <div className="flex flex-col gap-4 mt-4">
                    {
                        data.map((item) => (
                            <div key={item.id} className="flex items-center gap-3">
                                <Checkbox id={item.id} defaultChecked={item.defaultChecked} />
                                <Label htmlFor={item.id}>{item.label}</Label>
                            </div>
                        ))
                    }
                </div >
            </div>
        </div>
    )
}

export default CampingTrigar
