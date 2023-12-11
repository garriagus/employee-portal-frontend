import Link from "next/link";
import { PlaneIcon } from "@/components/ui/icons";
import { prisma } from "@/data/prisma";
import Card from "@/components/Card";
import SideBar from "@/components/SideBar";
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
    <>
      <SideBar />
      {users.map((user) => (
        <Card key={user.id} userProps={user}>
          {tags.map((tag) => (
            <div key={tag.id}>
              numero: {tag.id}
              <br />
              tag: {tag.uid}
              <br />
              ip de la puerta: {tag.ip}
            </div>
          ))}
        </Card>
      ))}
    </>
  );
}
