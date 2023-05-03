import axios  from 'axios'

const UploadFile = async (e, imageUrl) => {
    const file = e.target.files[0]

    if (file)
    {
        const formData = new FormData()
        formData.append("uploadFor", 'logo')
        formData.append(
            'logo',
            file,
            file.name
        )
        await axios.post('https://backend.johortourism.my/admin/uploadFile', formData)
        .then(res => {
            const result = res.data.data.successResult
            imageUrl(`https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${result}`)
        })
        .catch(err => console.log(err))
    }

    return imageUrl
}
  
export default UploadFile

