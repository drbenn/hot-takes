

import { createNewPost } from '../../lib/mysqldb';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { revalidatePath } from 'next/cache';
import { IoBeerSharp } from "react-icons/io5";

export default function PostForm() {

    const handlePost = async (formData: FormData) => {
        "use server"
        const submitData = {
            postText: formData.get("postText") as string
        }
        const response = await createNewPost(submitData.postText);    

        // rerenders route to update Posts and therefore Postslists
        revalidatePath("/mysql-crud");
    };
  return (
    <>
        <form action={handlePost}>
            <Input
                name="postText"
                type="text"
                className="bg-white my-3"
            />
            <Button className="bg-zinc-900 hover:bg-zinc-600
                transition text-white rounded py-2 px-3 mb-3"
                type="submit"
                >
                <IoBeerSharp className="mr-2 h-4 w-4" /> Insert New Post
            </Button>
        </form>
    </>
  )
}