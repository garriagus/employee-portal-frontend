import Link from "next/link";
import { PlaneIcon } from "@/components/ui/icons";
import { User } from "@prisma/client";

interface Props {
  userProps: User;
}
export default function Card({userProps}: any) {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            E3
          </span>
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
        nombre: {userProps.name}
        </h3>
        <p className="text-sm text-muted-foreground">Product Manager</p>
      </div>
    </div>
  );
}
