import {Song} from "../models/song.model.js";
import {Album} from "../models/album.model.js";
export const createSong= async(req,res)=>{
    try{
        if(!req.files || !req.files.audioFile || !req.files.imageFile){
            return res.status(400).json({message:"Audio and Image file required"});
        }
        const {title,artist,albumId,duration}=req.body;
        const audioFile=req.files.audioFile;
        const imageFile=req.files.imageFile;
        const song =new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            albumIdL:albumId||null,
            duration,
        })
        await song.save();
        if(albumId){
            await Album.findByIdAndUpdate("AlbumId",{
                $push:{
                    songs:song._id,
                }
            });
        }
        res.status(201).json({song});
    }catch(error){
        console.log("Error in createSong",error);
        res.status(500).json({message:"Internal Server Error",error});
    }
};