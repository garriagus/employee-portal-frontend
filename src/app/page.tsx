import Link from "next/link";
import { prisma } from "@/data/prisma";

async function getAllUsers() {
  const data = await prisma.user.findMany({
    include: {
      tag: true,
    },
    orderBy: {
      id: "desc",
    },
  });
  return data;
}

async function getAllTags() {
  const data = await prisma.tag.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const users = await getAllUsers();
  const tags = await getAllTags();

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <>
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                nombre: {user.name}
                
                <>
                  {tags.map((tag) => (
                    <div key={tag.id}>
                      numero: {tag.id}
                      <br />
                      tag: {tag.uid}
                      <br />
                      ip de la puerta: {tag.ip}
                    </div>
                  ))}
                </>
              </h3>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
