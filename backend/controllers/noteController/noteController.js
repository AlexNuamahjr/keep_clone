import Note from "../../config/models/noteModel/noteModel.js";

const createNote = async (req, res)=>{
    const {title, content} = req.body;
    try {
        // check if fields are empty
        if (!title || !content){
            return res.status(400).json({message: "The above fields are required!"})
        }
        // create a new note
        const newNote = await Note.create({title, content});
        return res.status(200).json({message: "Note created successfully!", note: newNote});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error!"})
    }
};

export {
    createNote
}