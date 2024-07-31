import react,{useState} from "react";

function Image()
{


    let[photo,setPhoto]=useState(false)

    let changePhoto=()=>{
        if(photo)
        {
        setPhoto(false)
        }
        else{
            setPhoto(true)
        }
    }
    return(
        <div>
            <img src={photo ? "https://cdn.pixabay.com/photo/2020/07/11/06/22/sunflower-5392872_1280.jpg" : "https://cdn.pixabay.com/photo/2018/01/04/19/43/rose-3061486_1280.jpg"} onClick={changePhoto} alt="" />
        </div>
    )
}
export default Image;