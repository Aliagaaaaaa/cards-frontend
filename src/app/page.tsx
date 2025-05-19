'use client';

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-4 tracking-tight">Card Games</h1>
          <p className="text-gray-600 text-lg font-light">Play classic card games online with friends - completely free</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-light">Blackjack</CardTitle>
              <CardDescription className="text-gray-500">
                Play online with friends
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Challenge your friends in this timeless casino favorite. No real money involved - just pure fun and strategy. Create private rooms and invite your friends to play together.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                onClick={() => toast("Coming soon!")}
                variant="default"
                className="w-full border-gray-300"
              >
                Play Blackjack
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-light">Poker</CardTitle>
              <CardDescription className="text-gray-500">
                Free online poker with friends
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Get ready for an exciting poker experience with your friends. Create private tables, invite your friends, and enjoy poker nights without spending a dime. Perfect for practicing and having fun.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                onClick={() => toast("Coming soon!")}
                variant="default"
                className="w-full border-gray-300"
              >
                Play Poker
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
