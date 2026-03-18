import axios from "axios"

export default async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'cc22-upload')
        const resp = await axios.post('https://api.cloudinary.com/v1_1/psac/image/upload', formData)
        console.log('uploadCloud : resp', resp)
        return resp.data.secure_url
}
