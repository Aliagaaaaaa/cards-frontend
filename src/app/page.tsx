'use client';

import { toast } from "sonner";
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Home() {
  const { isLoaded } = useAuth();
  const [mounted, setMounted] = useState(false);

  // This ensures the component only renders client-side where Clerk is fully available
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading skeleton
  const renderAuthButton = (text: string) => {
    if (!mounted || !isLoaded) {
      return (
        <Button 
          variant="default"
          className="w-full border-gray-300"
          disabled
        >
          {text}
        </Button>
      );
    }

    return (
      <>
        <SignedIn>
          <Button 
            onClick={() => toast("Coming soon!")}
            variant="default"
            className="w-full border-gray-300"
          >
            {text}
          </Button>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button 
              variant="default"
              className="w-full border-gray-300"
            >
              Sign In to Play
            </Button>
          </SignInButton>
        </SignedOut>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-light tracking-tight">Card Games</h1>
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-600 text-lg font-light">Play classic card games online with friends - completely free</p>
        </div>

        <SignedIn>
          <div className="flex justify-center items-center gap-4 mb-12">
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-12 w-12"
                }
              }}
            />
            <span className="text-lg font-medium">Martin</span>
          </div>
        </SignedIn>

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
              {renderAuthButton("Play Blackjack")}
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
              {renderAuthButton("Play Poker")}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
