// import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
// import { getMyImages } 

export const dynamic = "force-dynamic"; // assists in preventing page caching

// Per Theo(PT): Dont put images in public or assets folder, load them from a url, use uploadthing.com

const mockUrls = [
    "https://utfs.io/f/547f6d84-cf99-49a4-89e3-818254ffcc38-1h.webp",
    'https://utfs.io/f/8dd1e7ae-4085-4e0a-a58d-050b5263bca2-v821d.webp',
    'https://utfs.io/f/3af40900-f676-44ea-bbf6-cc471f28c1df-1g.webp',
    'https://utfs.io/f/81692a4c-2be5-4d19-9243-928afac2965b-m1iwk6.webp',
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}));

export default async function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">{
            [...mockImages, ...mockImages, ...mockImages].map((image) => (
                <div key={image.id * Math.random()} className="w-48">
                    {/* Must update next.config to allow external image sources */}
                    <Image
                        src={image.url}
                        alt={image.id.toString()}
                        width="250"
                        height="250"
                        layout="responsive"
                    />
                </div>
            ))
        };
        </div>
    </main>
  );
}