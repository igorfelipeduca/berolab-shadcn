import ComponentShowcase from "@/components/component-showcase";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full sm:mx-auto sm:max-w-[90rem] py-32">
      <div className="w-full flex justify-center">
        <h1 className="text-zinc-200 text-4xl font-bold">BeroCN</h1>
      </div>

      <div className="mt-8 w-full flex justify-center">
        <div className="w-full flex flex-col gap-8">
          <ComponentShowcase
            name="Button"
            variants={[
              "default",
              "secondary",
              "destructive",
              "dracula",
              "muted",
            ]}
          >
            <Button>Default</Button>
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"destructive"}>Destructive</Button>
            <Button variant={"dracula"}>
              <div className="flex items-center gap-2">
                <Image
                  src={"https://www.berolab.app/icons/home.svg"}
                  alt="Home"
                  width={48}
                  height={48}
                  className="size-8"
                />
                Dracula
              </div>
            </Button>
            <Button variant={"muted"}>Muted</Button>
          </ComponentShowcase>
        </div>
      </div>
    </div>
  );
}
