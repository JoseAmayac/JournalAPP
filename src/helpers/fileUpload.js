export const fileUpload = async( file )=>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dives8mzj/upload';
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('upload_preset','react-journal');

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
}