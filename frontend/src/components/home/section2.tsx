import React from 'react';
import { Card, CardContent } from "../../shadn/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../shadn/components/ui/carousel"
 
export function Section2() {

    return (
        <>
            <div className='min-h-screen' >
                <div className='w-full flex items-center justify-center'>
                    <Carousel className="w-full max-w-[80rem]">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 15 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default React.memo(Section2);
