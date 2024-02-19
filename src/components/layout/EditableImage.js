import Image from "next/image";
import toast from "react-hot-toast";
export default function EditableImage({ link, setLink }) {


  async function handleFileChange(ev) {

    const files = ev.target.files;
    // console.log(ev.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(ev.target.files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      setLink(reader.result);
      toast.success('Image uploaded successfully');
    }
    reader.onerror = (error) => {
      console.log("Error: ", error);
      toast.error('Error uploading image');
    }

    // await toast.promise(uploadPromise, {
    //   loading: 'Uploading...',
    //   success: 'Upload complete',
    //   error: 'Upload error',
    // });

    // Rest of your code...

  }

  return (
    <>
      {link && (
        <Image className="rounded-lg w-full h-full mb-1" src={link} width={250} height={250} alt={'avatar'} />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Change image</span>
      </label>
    </>
  );
}