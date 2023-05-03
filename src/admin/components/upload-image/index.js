import axios  from 'axios'

  const Index = async (e, imageUrl) => {
    const file = e.target.files[0]
    const fileType = ['image/jpeg', 'image/png', 'image/gif'].includes(file?.type)

    if (file.size <= 800000) {
      
      if (fileType) {
        const formData = new FormData()
        formData.append("uploadFor", 'logo')
        formData.append(
          'logo',
          file,
          file.name
        )
        await axios.post('https://backend.johortourism.my/admin/uploadFile', formData)
        .then(res => {
            imageUrl(res.data.data.successResult[0])
       })
        .catch(err => console.log(err))
      }
    }
    return imageUrl
  }
  
  export default Index

