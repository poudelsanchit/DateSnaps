import { useState } from 'react'

const usePreviewImage = () => {
    console.log('first')
    const [imageUrl, setImageUrl] = useState(null);
    const handleImageChange = (e) => {
        console.log('first')
        const file = e.target.files[0];
       if(file && file.type.startsWith("image/") )
       {
        console.log('type')
        const reader =  new FileReader();
        reader.onloadend=()=>{
            setImageUrl(reader.result)
        }
        reader.readAsDataURL(file);
       }
       else{
        console.log("Error");
        setImageUrl(null);
       }
    };
console.log(imageUrl)
    return {handleImageChange,imageUrl}
}

export default usePreviewImage