import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui_components/shadn/components/ui/card";
import { Skeleton } from "@/ui_components/shadn/components/ui/skeleton";
import React, { useMemo } from "react";

// Definieren Sie die Skelett-Komponenten außerhalb der Funktion, um wiederholte Neuberechnungen zu vermeiden
const titleSkeleton = <Skeleton className="h-6 w-full rounded-md" />;
const descriptionSkeleton = <Skeleton className="h-3 w-8/12 rounded-md" />;
const contentSkeleton = <Skeleton className="w-[124.25px] h-10 absolute right-4 bottom-4 " />;

// Funktion, um Kartenkomponenten zu generieren
const generateCard = () => (
  <div className="my-2 md:my-8 md:mx-12">
      <Card className="border border-gray-400 rounded-xl shadow-3xl shadow-white/10 hover:shadow-3xl hover:shadow-white/30 min-w-[17rem] md:min-w-[25rem] min-h-[12rem] max-h-[25rem] relative w-full">
        <CardHeader className="absolute w-full top-0 rounded-tl-xl rounded-br-xl">
          <CardTitle className="text-gray-200">
            {titleSkeleton}
          </CardTitle>
          <CardDescription>
            {descriptionSkeleton}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {contentSkeleton}
        </CardContent>
      </Card>
  </div>
);

const BlogHeadersSkeleton = () => {
  const cardCount = 4; // Anzahl der Karten

  // Erzeugen Sie ein Array von Kartenkomponenten und speichern Sie es im Zustand, um unnötige Neuberechnungen zu vermeiden
  const cardComponents = useMemo(() => {
    return Array.from({ length: cardCount }, (_, index) => (
      <React.Fragment key={index}>{generateCard()}</React.Fragment>
    ));
  }, [cardCount]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:px-40">
      {cardComponents}
    </div>
  );
};

export default BlogHeadersSkeleton;
