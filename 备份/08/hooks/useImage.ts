import { reactive } from "vue";
import axios from "axios";

export default function () {
    let imageList = reactive([
        'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn//large/0072Vf1pgy1foxkfbw72ej31hc0u0gyy.jpg'
    ])
    async function getImage() {
        try {  
            let result = await axios.get('https://www.dmoe.cc/random.php?return=json');  
            console.log(result.data.imgurl);  
            imageList.push(result.data.imgurl); // 假设你想把图片添加到列表中  
        } catch (error) {  
            console.error('Failed to fetch image:', error);  
        }  
    }
    return {imageList, getImage}
}
