'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';


const IdeasCard = () => {
    return (
        <div>
            <Card className='w-72 h-[201px]'>
                <CardHeader>
                    <CardTitle>
                        <div className='flex justify-center py-2'>
                            <span>Improvement Ideas</span>
                        </div>
                    </CardTitle>
                    <CardDescription className=' flex text-8xl justify-center'>
                        <span>69</span>

                    </CardDescription>

                </CardHeader>

            </Card>
        </div>
    );
};

export default IdeasCard;