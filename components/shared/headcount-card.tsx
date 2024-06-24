'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';


const HeadCountCard = () => {
    return (
        <div>
            <Card className='w-72 h-[201px]'>
                <CardHeader>
                    <CardTitle>
                        <div className='flex justify-center py-2'>
                            <span>Headcount</span>
                        </div>
                    </CardTitle>
                    <CardDescription className=' flex text-8xl justify-center'>
                        <span>381</span>

                    </CardDescription>

                </CardHeader>

            </Card>
        </div>
    );
};

export default HeadCountCard;