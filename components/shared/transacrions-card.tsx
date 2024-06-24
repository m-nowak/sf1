'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';


const TransactionsCard = () => {
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
                                    <TableHead>Quantity</TableHead>
                                    <TableHead className="text-right">Transaction</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">777</TableCell>
                                    <TableCell>678799</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>7897</TableCell>
                                    <TableCell className="text-right">Operation not complete</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">1653</TableCell>
                                    <TableCell>678796</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>125674</TableCell>
                                    <TableCell className="text-right">Operation complete</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">777</TableCell>
                                    <TableCell>678799</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>7897</TableCell>
                                    <TableCell className="text-right">Operation not complete</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">1653</TableCell>
                                    <TableCell>678796</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>125674</TableCell>
                                    <TableCell className="text-right">Operation complete</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">777</TableCell>
                                    <TableCell>678799</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>7897</TableCell>
                                    <TableCell className="text-right">Operation not complete</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">1653</TableCell>
                                    <TableCell>678796</TableCell>
                                    <TableCell>GV</TableCell>
                                    <TableCell>125674</TableCell>
                                    <TableCell className="text-right">Operation complete</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>

                </CardHeader>
            </Card>
        </div>
    );
};

export default TransactionsCard;