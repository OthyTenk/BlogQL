"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Container from "./Container";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();

  const onCreatePost = () => {
    router.push("/create");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <Container>
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="font-semibold">
            <Link href="/">BlogQL</Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" onClick={onCreatePost}>
              Create Post
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
