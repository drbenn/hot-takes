import SubmitBtn from "@/app/components/add-post-form";
import { color } from "framer-motion";
import { revalidatePath } from "next/cache";

export default function AddPostForm() {
  const addPost = async (formData: FormData) => {
    "use server";
    console.log(formData);
    
    // await prisma.post.create({
    //   data: {
    //     title: formData.get("title") as string,
    //     body: formData.get("body") as string,
    //   },
    // });

    // rerenders route to update Posts and therefore Postslists
    revalidatePath("/posts");
  }  
  return (
    <form
      action={addPost}
      className="flex flex-col rounded max-w-[500]px mb-10 mx-auto space-y-2"
    >
      <input 
        type="text"
        name="title"
        placeholder="Title"
        className="border rounded h-10 px-3"
      />
      <textarea
        name="body"
        placeholder="Body"
        className="border rounded p-3"
        rows={5}
        required
      />

      <SubmitBtn />


    </form>
  )
}
