import { asyncHandler } from "../utils/asynchandler.js"
import { ApiError } from "..//utils/apiError.js"
import { User } from "..//models/user.models.js"


const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if - user already registered or not
    // check for images and avatar
    // upload them to cloudinary, avatar
    // create user onject - create entry in db
    // remove password and refresh token
    // check for user creation
    // return response

    const { fullName, email, username, password } = req.body
    console.log("Email:", email);
    console.log(req.body);
    // console.log(req.files);



    if (
        [fullName, email, username, password].some((field) =>
            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "Email/Username exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLOcalPath = req.files?.coverImage[0]?.path;

})


export { registerUser }