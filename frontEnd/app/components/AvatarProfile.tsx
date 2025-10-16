"use client"
import Image from "next/image";
import photos from '../../public/avatar.jpeg'
import { ComponentProps, useEffect, useState } from "react";
import { URL } from "url";
import { useSession } from "next-auth/react";


interface AvatarProfileProps extends ComponentProps<'input'> {


}
export default function AvatarProfile({ ...props }: AvatarProfileProps) {


  const [file, setFile] = useState("")
  // const [foto, setFoto] = useState(photos)
  const [photo, setPhoto] = useState(photos)

  const { data: session, status } = useSession();



  // const handleFileChange = (e: any) => {
  //   setFile(e.target.files[0]);
  //   setFoto(URL.createObjectURL(e.target.files[0]))


  // };



  // async function handleFoto() {


  //   const res = await fetch(`http://localhost:8080/usuario/settings/${idUser}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },
  //   })
  //   if (!res) {
  //     console.log(res);
  //   } else {
  //     const blob = await res.blob();
  //     const imageUrl = URL.createObjectURL(blob);
  //     setPhoto(imageUrl);
  //   }
  // }

  useEffect(() => { handleFoto() }, [token])
  return (
    <div className="relative">
      <label htmlFor="file-input" className="cursor-pointer">
        <div className="w-80 h-80 relative">
          <Image
            src={""}
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover"
            unoptimized
          />
        </div>
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/jpeg, image/png" // Adicione os formatos desejados
        className="hidden"
        onChange={(e) => handleFileChange(e)}
      />
    </div>
  )
}