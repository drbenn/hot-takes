

import { updatePost } from '../../lib/mysqldb';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { revalidatePath } from 'next/cache';
import { IoBeerSharp } from "react-icons/io5";

export default function UpdateForm() {

    const handleUpdate = async (formData: FormData) => {
        "use server"
        const submitData = {
            postId: formData.get("postId") as string,
            post: formData.get("updatedPost") as string,
        };

        const response = await updatePost(submitData);    
        
        // rerenders route to update Posts and therefore Postslists
        revalidatePath("/mysql-crud");
    };
  return (
    <>
        <form action={handleUpdate}>
          <Input
            name="postId"
            type="text"
            className="bg-white my-3"
            placeholder='Post ID'  
            />
            <Input
                name="updatedPost"
                type="text"
                className="bg-white mb-3"
                placeholder='Replacement Post'  
            />
          <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3"
            type="submit"
            >
            <IoBeerSharp className="mr-2 h-4 w-4" /> Replace Existing Post
          </Button>
        </form>
    </>
  )
}