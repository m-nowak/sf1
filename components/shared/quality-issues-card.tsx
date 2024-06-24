'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';


const QualityIssuesCard = () => {
    return (
        <div>
            <Card className='w-[740px] h-[501px]'>
                <CardHeader>
                    <CardTitle>

                        <span>Latest transactions</span>

                    </CardTitle>
                    <CardContent>
                        <Table className='mt-4'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">M/C</TableHead>
                                    <TableHead>MO</TableHead>
                                    <TableHead>Operation</TableHead>
                                    <TableHead>GAP</TableHead>
                                    <TableHead className="text-right">Problem</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">777</TableCell>
                                    <TableCell>678799</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>MS1</TableCell>
                                    <TableCell className="text-right">shank o/s</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">1653</TableCell>
                                    <TableCell>678796</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>SD</TableCell>
                                    <TableCell className="text-right">effective u/s</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">777</TableCell>
                                    <TableCell>678799</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>SD</TableCell>
                                    <TableCell className="text-right">Damage</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">1653</TableCell>
                                    <TableCell>678796</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>SD</TableCell>
                                    <TableCell className="text-right">Damage</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">777</TableCell>
                                    <TableCell>678799</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>SL</TableCell>
                                    <TableCell className="text-right">Damage</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">1653</TableCell>
                                    <TableCell>678796</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>SD</TableCell>
                                    <TableCell className="text-right">Damage</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>

                </CardHeader>
            </Card>
        </div>
    );
};

export default QualityIssuesCard;