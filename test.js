const axios = require('axios');
class Cloudupld{
    constructor(preset, cloud_name){
        this.preset = preset;
        this.cloud_name = cloud_name
    }

    upld(file){
        console.log("Ironman");
        console.log("preset :- " + this.preset);
        console.log("cloud name: " + this.cloud_name)
        // console.log("buffer :- "+file);
        return axios({
            method: 'POST',
            url: `https://api.cloudinary.com/v1_1/${this.cloud_name}/image/upload`,
            data: {
                file: file,
                upload_preset: this.preset
            }
        }).then((resp1) => {
            console.log("resp1 17 :-"+resp1.data.url);
            return resp1.data.url
        }).catch((er1) => {
            return er1;
        })
    }
}

module.exports = Cloudupld;