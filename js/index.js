// 原始数据
let data = {
    'text': '',
    'speaker': '神里绫华',
    'noise': '0.667',
    'noisew': '0.8',
    'length': '1.2',
    'format': 'mp3'
}

// 填入数据
const getData = () => {
    const { text, speaker, noise, noisew, length, format } = data
    if (text === '')
        alert('请输入文本')
    else {
        const node = document.getElementsByTagName('audio')[0]
        node.setAttribute('src', `http://233366.proxy.nscc-gz.cn:8888/?text=${text}&speaker=${speaker}&noise=${noise}&noisew=${noisew}&length=${1 / length}&format=${format}`)
    }
}

// 修改显示参数
const changeParams = () => {
    let nodeList = document.querySelectorAll('.param')
    for (let i = 0; i < nodeList.length; i++) {
        switch (i) {
            case 0:
                nodeList[i].innerHTML = data['noise']
                break
            case 1:
                nodeList[i].innerHTML = data['noisew']
                break
            case 2:
                nodeList[i].innerHTML = data['length']
                break
        }
    }
}

// 页面加载时调用一次
changeParams()

// 绑定输入数据
const handleData = (name, value) => {
    data = { ...data, [name]: value }
    changeParams()
}

// 绑定生成事件
document.querySelector('.produce').addEventListener('click', () => {
    getData()
})
